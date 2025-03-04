// pages/api/gemini.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        console.log('Request Body:', req.body);
        const { message, history } = req.body;
        const geminiApiKey = process.env.GEMINI_API_KEY;
  
        if (!geminiApiKey) {
          return res.status(500).json({ error: 'Gemini API key not configured' });
        }
  
        const geminiResponse = await fetch('https://api.generativeai.google.com/v1beta2/models/gemini-2.0-flash:generateMessage', {  // Updated endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${geminiApiKey}`,  // Updated authorization header
          },
          body: JSON.stringify({
            prompt: {
              messages: [
                { content: message }
              ]
            }
          }),
        });
  
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