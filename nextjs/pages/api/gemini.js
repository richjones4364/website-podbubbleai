const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
    temperature: 0.3,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash", // You might try "gemini-pro" as well
    generationConfig,
});

const systemInstruction = `You are a counsellor, trained to listen to children in a school as they describe their problems to you.  They are speaking to you because they wish to report an incident that has happened to them. You need to find out and record in a pdf document. All of your messages must be written with a reading age of 8. The conversation must be kept as simple, and brief as possible. Keep the conversation brief but caring. 

Standard Operating Procedure:

1. Greet the user, use their name if they have given it. 

 2. Collect name of student (first name and last name, both are essential)

3. tutor group of student 

4a. What happened i.e. the details of the incident they are reporting.

4b. who was involved in the incident?

4c. Get the names of witnesses if there were any

5. how does this make the student feel?

6. Confirm: is there aything else they need to tell you?

7. Inform them that you will contact Miss Smith with the details, thank them, and end chat. Do not wait for the user to end the chat. 
`;

// Chat state is maintained outside the handler function.
let chat = null;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { message } = req.body;

    if (!apiKey) {
        console.error('Error: Gemini API key not configured. Check your environment variables.');
        return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    try {
        console.log("Generation Config:", JSON.stringify(generationConfig, null, 2));
        console.log("message: ", message);

        // Create the chat only if it does not exist
        if (chat === null) {
            console.log("Starting new chat with system instruction");
            chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: systemInstruction }]
                    },
                ],
                generationConfig,
            });
        }

        const result = await chat.sendMessage(message);
        console.log("Response from Gemini:", JSON.stringify(result, null, 2));

        res.status(200).json({ response: result.response.text() });
    } catch (error) {
        console.error('Error communicating with AI agent:', error);
        console.error("Error Details:", JSON.stringify(error, null, 2));
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
