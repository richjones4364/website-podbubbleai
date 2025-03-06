export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    console.log('✅ Received Request Body:', req.body);

    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
        console.error('❌ Gemini API key is missing');
        return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    console.log('🔑 Gemini API Key is set');

    try {
        const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: req.body.message }] }]
            }),
        });

        console.log('🌍 Google API Response Status:', geminiResponse.status);
        
        const geminiData = await geminiResponse.json();
        console.log('📡 Google API Full Response:', JSON.stringify(geminiData, null, 2));

        if (!geminiResponse.ok) {
            console.error('❌ Google API returned an error:', geminiData);
            return res.status(geminiResponse.status).json({ error: geminiData });
        }

        console.log('✅ Sending Response to Frontend:', JSON.stringify(geminiData, null, 2));
        res.status(200).json({ response: geminiData });
    } catch (error) {
        console.error('🚨 Fetch Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
