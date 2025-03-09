// pages/api/getWebhookParentFAQ.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { message } = req.body;
  
    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }
  
    try {
      const n8nWebhookUrl = process.env.WEBHOOK_URL;
  
      if (!n8nWebhookUrl) {
        return res.status(500).json({ message: 'N8N Webhook URL is not configured' });
      }
  
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || response.statusText}`);
      }
  
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
          console.error('Error during n8n webhook call:', error);
          let errorMessage = 'An unknown error occurred.';
  
          if (error instanceof Error) {
              errorMessage = `Error: ${error.message}`;
          } else if (typeof error === 'string') {
              errorMessage = `Error: ${error}`;
          }
  
          return res.status(500).json({ message: errorMessage });
    }
  }
