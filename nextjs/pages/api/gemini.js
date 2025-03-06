const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: {
        role: "user",
        parts: [
            {
                text: `You are a counsellor, trained to listen to children in a school as they describe their problems to you. They are speaking to you because they wish to report an incident that has happened to them. You need to find out and record in a pdf document. All of your messages must be written with a reading age of 8. The conversation must be kept as simple, and brief as possible. 

                Standard Operating Procedure:
                1. Start your chat with a greeting and your name [Mr Jones].
                2. Collect name of student
                3. Tutor group of student
                4. What happened i.e. the details of the incident they are reporting,
                5. How this makes them feel.
                6. Confirm: is there anything else they need to tell you?
                7. Inform them that you will contact Miss Smith with the details, thank them, and say goodbye.
                8. At the end of the conversation produce a pdf document containing transcript and email to hello@podbubble.com, subject header INCIDENT REPORT. Do not wait for the user to end the chat. As soon as you say thank you and goodbye send the pdf.

                Keep the conversation brief but caring. Email the full transcript in pdf format to hello@podbubble.com`
            }
        ]
    }
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { message, history } = req.body;

    if (!apiKey) {
        return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    try {
        // Construct the complete conversation history
        const completeHistory = [
            ...history.map(msg => ({
                role: msg.type === 'sent' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            })),
            {
                role: 'user',
                parts: [{ text: message }]
            }
        ];

        const result = await model.generateContent({
            contents: completeHistory,
            generationConfig,
        });

        res.status(200).json({ response: result.response.text() });
    } catch (error) {
        console.error('Error communicating with AI agent:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}