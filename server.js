require('dotenv').config({ path: '.env.local' });

const express = require('express');
const next = require('next');
const http = require('http');
const { initPrimus } = require('./primus');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const httpServer = http.createServer(server);

  initPrimus(httpServer);

  httpServer.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
