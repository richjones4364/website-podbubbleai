export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { message, systemMessage } = req.body;

    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
        return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    try {
        const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    { parts: [{ text: systemMessage }] },
                    { parts: [{ text: message }] }
                ]
            }),
        });

        const geminiData = await geminiResponse.json();

        if (!geminiResponse.ok) {
            return res.status(geminiResponse.status).json({ error: geminiData });
        }

        const responseContent = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response text.';
        res.status(200).json({ response: responseContent });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}