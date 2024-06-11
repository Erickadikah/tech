import { useEffect, useState } from 'react';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Fetch the API to ensure Primus is initialized
    fetch('/api/primus').then(() => {
      // Load Primus client script dynamically
      const script = document.createElement('script');
      script.src = '/api/primus-client';
      script.onload = () => {
        if (token) {
          const primus = new Primus(`?token=${token}`);

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

          // Clean up the connection when the component unmounts
          return () => {
            primus.end();
          };
        }
      };

      document.body.appendChild(script);
    });
  }, [token]);

  return <Component {...pageProps} setToken={setToken} />;
}
