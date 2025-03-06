const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { message, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: `You are a counsellor, trained to listen to children in a school as they describe their problems to you. They are speaking to you because they wish to report an incident that has happened to them. You need to find out and record in a pdf document. All of your messages must be written with a reading age of 8. Keep the conversation brief but caring.

        Standard Operating Procedure:
        1. Start your chat with a greeting and your name [Mr Jones].
        2. Collect name of student (first name and last name)
        3. Tutor group of student
        4a. What happened i.e. the details of the incident they are reporting, (names of people involved)
        4b. Get names of witnesses.
        5. How this makes them feel.
        6. Confirm: is there anything else they need to tell you? Just ask once then move on if the answer is no.
        7. Inform them that you will contact Miss Smith with the details, thank them, and end chat.
        8. At the end of the conversation produce a pdf document containing the transcript and email to hello@podbubble.com, subject header INCIDENT REPORT. Do not wait for the user to end the chat. As soon as you say thank you and goodbye send the pdf.`,
    });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    try {
        const chatSession = model.startChat({
            generationConfig,
            history: history.map(msg => ({
                role: msg.type === 'sent' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            })),
        });

        const result = await chatSession.sendMessage({
            parts: [{ text: message }]
        });

        res.status(200).json({ response: result.response.text() });
    } catch (error) {
        console.error('Error communicating with AI agent:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}