// pages/api/gemini.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { message, history } = req.body;
        const geminiApiKey = process.env.GEMINI_API_KEY;
  
        if (!geminiApiKey) {
          return res.status(500).json({ error: 'Gemini API key not configured' });
        }
  
        // Implement your Gemini API call here
        // Example (replace with your actual Gemini API logic):
        const geminiResponse = await fetch('YOUR_GEMINI_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'YOUR_API_KEY_HEADER': geminiApiKey, //Replace with your api key header.
          },
          body: JSON.stringify({ message, history }),
        });
  
        if (!geminiResponse.ok) {
          const geminiError = await geminiResponse.json();
          return res.status(geminiResponse.status).json({ error: geminiError });
        }
  
        const geminiData = await geminiResponse.json();
  
        res.status(200).json({ response: geminiData.response });
      } catch (error) {
        console.error('API Route Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }