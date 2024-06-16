import { initPrimus } from '../../../primus';

export default function handler(req, res) {
  const httpServer = res.socket.server;

  if (!httpServer.primus) {
    console.log('Initializing Primus...');
    const primus = initPrimus(httpServer);
    httpServer.primus = primus;
  }

  httpServer.primus.library((err, library) => {
    if (err) {
      console.error('Primus library error:', err);
      if (!res.headersSent) {
        res.status(500).send('Error serving Primus library');
      }
    } else {
      res.setHeader('Content-Type', 'text/javascript');
      res.send(library);
    }
  });

  // Log when response is sent
  res.on('finish', () => {
    console.log('Response sent for /api/primus');
  });

  res.on('error', (err) => {
    console.error('Error in sending response:', err);
    if (!res.headersSent) {
      res.status(500).send('Internal Server Error');
    }
  });
}
