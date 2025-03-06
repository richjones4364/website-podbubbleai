import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { message } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: "You are a counsellor, trained to listen to children in a school as they describe their problems to you. They are speaking to you because they wish to report an incident that has happened to them. You need to find out and record in a pdf document. All of your messages must be written with a reading age of 8. Keep the conversation brief but caring.\n\nStandard Operating Procedure:\n\n1. Start your chat with a greeting and your name [Mr Jones]. \n\n 2. Collect name of student (first name and last name)\n\n3. tutor group of student \n\n4a. What happened i.e. the details of the incident they are reporting, (names of people involved)\n\n4b. Get names of witnesses.\n\n5. how this makes them feel. \n\n6. Confirm: is there anything else they need to tell you? Just ask once then move on if the answer is no.\n\n7. Inform them that you will contact Miss Smith with the details, thank them, and end chat.\n\n8. At the end of the conversation produce a pdf document containing transcript and email to hello@podbubble.com, subject header INCIDENT REPORT. Do not wait for the user to end the chat. As soon as you say thank you and goodbye send the pdf. \n\n",
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
            history: [],
        });

        const result = await chatSession.sendMessage(message);

        res.status(200).json({ response: result.response.text() });
    } catch (error) {
        console.error('Error communicating with AI agent:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}