// pages/api/primus-client.js

import { initPrimus } from '../../../primus';

export default async function handler(req, res) {
  const httpServer = res.socket.server;

  try {
    // Initialize Primus if not already initialized
    const primus = await initPrimus(httpServer);

    // Serve the Primus client library (if needed)
    httpServer.primus.library((err, library) => {
      if (err) {
        console.error('Primus library error:', err);
        if (!res.headersSent) {
          res.status(500).send('Error serving Primus library');
        }
        return;
      }

      res.setHeader('Content-Type', 'text/javascript');
      res.send(library);
    });

    // Log when the response is sent
    res.on('finish', () => {
      console.log('Response sent for /api/primus');
    });

    // Handle errors in sending response
    res.on('error', (err) => {
      console.error('Error in sending response:', err);
      if (!res.headersSent) {
        res.status(500).send('Internal Server Error');
      }
    });

  } catch (err) {
    console.error('Primus initialization error:', err);
    if (!res.headersSent) {
      res.status(500).send('Primus initialization error');
    }
  }
}
