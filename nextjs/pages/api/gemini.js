export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        console.log('Request Body:', req.body);
        const { message } = req.body;
        const geminiApiKey = process.env.GEMINI_API_KEY;

        if (!geminiApiKey) {
            console.error('Gemini API key not configured');
            return res.status(500).json({ error: 'Gemini API key not configured' });
        }

        console.log('Gemini API key present');

        const geminiResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: message }] }],
                }),
            }
        );

        console.log('Gemini Response Status:', geminiResponse.status);

        if (!geminiResponse.ok) {
            const geminiError = await geminiResponse.json();
            console.error('Gemini API Error:', geminiError);
            return res.status(geminiResponse.status).json({ error: geminiError });
        }

        const geminiData = await geminiResponse.json();
        console.log('Gemini Data:', geminiData);

        // ✅ Extract the actual text response safely
        const responseText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || null;

        if (!responseText) {
            console.error('No valid response from Gemini API');
            return res.status(500).json({ error: 'Invalid Gemini API response' });
        }

        // ✅ Send the extracted response to the frontend
        res.status(200).json({ response: responseText });
    } catch (error) {
        console.error('API Route Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

// ✅ Ensure request body is parsed properly
export const config = {
    api: {
        bodyParser: true,
    },
};
