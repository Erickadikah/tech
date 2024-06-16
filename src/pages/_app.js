import { useEffect, useState } from 'react';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [token, setToken] = useState(null);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem('token');
  //   setToken(storedToken);

  //   if (storedToken) {
  //     // Dynamically load the Primus client script
  //     const script = document.createElement('script');
  //     script.src = '/api/primus-client';
  //     script.onload = () => {
  //       console.log('Primus client script loaded');
  //       // Initialize WebSocket connection here if needed
  //       // You should handle WebSocket connection logic separately
  //     };
  //     script.onerror = (error) => {
  //       console.error('Error loading Primus client script:', error);
  //     };
  //     document.body.appendChild(script);
  //   }
  // }, []);

  return <Component {...pageProps} />;
}
