export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log('Request Body:', req.body);
            const { message } = req.body;
            const geminiApiKey = process.env.GEMINI_API_KEY;

            if (!geminiApiKey) {
                console.error('Gemini API key not configured');
                return res.status(500).json({ error: 'Gemini API key not configured' });
            }

            console.log('Gemini API key present');

            try {
                const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: message }]
                        }]
                    }),
                });

                console.log('Gemini Response Status:', geminiResponse.status);

                if (!geminiResponse.ok) {
                    const geminiError = await geminiResponse.json();
                    console.error('Gemini API Error:', geminiError);
                    return res.status(geminiResponse.status).json({ error: geminiError });
                }

                const geminiData = await geminiResponse.json();
                console.log('Gemini Data:', geminiData);

                res.status(200).json({ response: geminiData });
            } catch (fetchError) {
                console.error('Gemini Fetch Error:', fetchError);
                return res.status(500).json({ error: 'Gemini Fetch Error' });
            }
        } catch (error) {
            console.error('API Route Error:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}