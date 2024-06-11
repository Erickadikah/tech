// Import necessary modules
import { initPrimus } from '../../../primus';

// Define the handler function for the API endpoint
export default function handler(req, res) {
  // Get the HTTP server instance from the response socket
  const httpServer = res.socket.server;
  
  // Initialize Primus and get the Primus instance
  const primus = initPrimus(httpServer);

  // Generate the Primus library and send it as a response
  primus.library((err, library) => {
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
}
