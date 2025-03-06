import { GoogleGenerativeAI } from "@google/generative-ai";

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
        systemInstruction: "You are a counsellor, trained to listen to children in a school as they describe their problems to you. They are speaking to you because they wish to report an incident that has happened to them. You need to find out and record in a pdf document. All of your messages must be written with a reading age of 8. Keep the conversation brief but caring.",
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
            history: history.map(msg => ({ role: msg.type === 'sent' ? 'user' : 'assistant', content: msg.text })),
        });

        const result = await chatSession.sendMessage(message);

        res.status(200).json({ response: result.response.text() });
    } catch (error) {
        console.error('Error communicating with AI agent:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}