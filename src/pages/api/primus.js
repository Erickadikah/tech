const { initPrimus } = require('../../../primus');

export default async function handler(req, res) {
  const httpServer = res.socket.server;

  try {
    // Initialize Primus if not already initialized
    if (!httpServer.primus) {
      console.log('Initializing Primus...');
      httpServer.primus = await initPrimus(httpServer);
    }

    // Ensure httpServer.primus is properly initialized before using it
    if (!httpServer.primus || typeof httpServer.primus.library !== 'function') {
      throw new Error('Primus initialization error or library function not available');
    }

    // Serve the Primus client library
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
      console.log('Response sent for /api/primus-client');
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
      res.status(500).send('Internal Server Error');
    }
  }
}
