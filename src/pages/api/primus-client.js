import { useEffect } from 'react';

const PrimusClient = () => {
  useEffect(() => {
    // Fetch the API to ensure Primus is initialized
    fetch('/api/primus')
      .then(() => {
        // Load Primus client script dynamically
        const script = document.createElement('script');
        script.src = '/api/primus-client';
        script.onload = () => {
          // Primus client script loaded, establish connection
          const primus = new Primus(); // Assuming Primus constructor is globally available
          
          // Add event listeners for Primus connection events
          primus.on('open', () => {
            console.log('Connection open');
            primus.write('Hello server!');
          });

          primus.on('data', (data) => {
            console.log('Received from server:', data);
          });

          primus.on('end', () => {
            console.log('Connection closed');
          });

          // Optionally return cleanup function if needed
          return () => {
            primus.end(); // Clean up the connection when the component unmounts
          };
        };

        document.body.appendChild(script);
      })
      .catch((error) => {
        console.error('Error initializing Primus:', error);
      });
  }, []); // Ensure this effect runs only once

  return null; // This component doesn't render anything
};

export default PrimusClient;
