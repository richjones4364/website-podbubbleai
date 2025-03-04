export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log('Request Body:', req.body);
            const { message } = req.body;
            const geminiApiKey = process.env.GEMINI_API_KEY;

            if (!geminiApiKey) {
                return res.status(500).json({ error: 'Gemini API key not configured' });
            }

            console.log('Gemini API key present');

            try {
                const geminiResponse = await fetch('https://api.generativeai.google.com/v1beta2/models/gemini-2.0-flash:generateMessage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${geminiApiKey}`,
                    },
                    body: JSON.stringify({
                        prompt: {
                            messages: [{ content: message }],
                        },
                    }),
                });

                console.log('Gemini Response Status:', geminiResponse.status);
                console.log('Gemini Response:', geminiResponse);

                if (!geminiResponse.ok) {
                    let geminiError;
                    try {
                        geminiError = await geminiResponse.json();
                        console.error('Gemini API Error:', geminiError);
                    } catch (err) {
                        console.error('Error parsing Gemini API error:', err);
                        geminiError = { message: 'Unknown error from Gemini API' };
                    }
                    return res.status(geminiResponse.status).json({ error: geminiError });
                }

                const geminiData = await geminiResponse.json();
                console.log('Gemini Data:', geminiData);

                res.status(200).json({ response: geminiData.response });
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