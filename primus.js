const Primus = require('primus');
const { verifyToken } = require('./utils/auth');

let primus;

function initPrimus(server) {
  if (!primus) {
    console.log('Initializing Primus...');
    primus = new Primus(server, { transformer: 'websockets' });

    // Authentication middleware
    primus.use('auth', (spark, next) => {
      const token = spark.query.token;
      const user = verifyToken(token);

      if (user) {
        spark.user = user;
        return next();
      }

      const err = new Error('Authentication failed');
      err.statusCode = 401;
      next(err);
    });

    // Log connections and disconnections
    primus.on('connection', (spark) => {
      console.log('New connection:', spark.id, 'User:', spark.user);

      // Log disconnection
      spark.on('end', () => {
        console.log('Connection ended:', spark.id, 'User:', spark.user);
      });

      // Handle incoming data
      spark.on('data', (data) => {
        console.log('Received data:', data);
        // Echo the received message back to the client
        spark.write(`Echo: ${data}`);
      });

      // Custom event example
      spark.on('custom-event', (data) => {
        console.log('Custom event received:', data);
        // Handle custom event
      });
    });

    // Broadcast message to all connected clients
    primus.on('broadcast', (message) => {
      primus.forEach((spark) => {
        spark.write(message);
      });
    });

    // Example of creating rooms (requires additional logic)
    const rooms = {};

    primus.on('join-room', (spark, roomName) => {
      if (!rooms[roomName]) {
        rooms[roomName] = [];
      }
      rooms[roomName].push(spark);
      spark.room = roomName;
      console.log(`Spark ${spark.id} joined room ${roomName}`);
    });

    primus.on('leave-room', (spark) => {
      const roomName = spark.room;
      if (roomName && rooms[roomName]) {
        rooms[roomName] = rooms[roomName].filter((s) => s !== spark);
        console.log(`Spark ${spark.id} left room ${roomName}`);
      }
    });

    primus.on('room-message', (roomName, message) => {
      if (rooms[roomName]) {
        rooms[roomName].forEach((spark) => {
          spark.write(message);
        });
      }
    });
  }
  return primus;
}

module.exports = { initPrimus };
