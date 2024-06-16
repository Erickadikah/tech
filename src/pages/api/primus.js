import { initPrimus } from '../../../primus';

// Handler function for the API endpoint
export default function handler(req, res) {
  // Get the HTTP server instance from the response socket
  const httpServer = res.socket.server;

  // Initialize Primus if it's not already initialized
  if (!httpServer.primus) {
    console.log('Initializing Primus...');
    const primus = initPrimus(httpServer);
    httpServer.primus = primus;
  }

  // Generate the Primus library and send it as a response
  httpServer.primus.library((err, library) => {
    if (err) {
      // If an error occurs, send a 500 response with an error message
      console.error('Primus library error:', err);
      res.status(500).send('Error serving Primus library');
    } else {
      // If successful, set the Content-Type header and send the library
      res.setHeader('Content-Type', 'text/javascript');
      res.send(library);
    }
  });

  res.on('close', () => {
    console.log('Response closed for /api/primus');
  });

  res.on('error', (err) => {
    console.error('Error in sending response:', err);
    res.status(500).send('Internal Server Error');
  });
}