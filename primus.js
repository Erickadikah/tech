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
        spark.user = user; // Attach user to the spark object
        return next();
      }

      const err = new Error('Authentication failed');
      err.statusCode = 401;
      next(err);
    });

    primus.on('connection', (spark) => {
      console.log('New connection:', spark.id, 'User:', spark.user); // Log new connections and associated user
      
      // Send user information to the client
      spark.write({ type: 'user', user: spark.user });
      console.log('Sent user information:', spark.user);

      spark.on('data', (data) => {
        console.log('Received data:', data);
        spark.write(`Echo: ${data}`);
        console.log('Sent data:', `Echo: ${data}`);
      });
    });
  }
  return primus;
}

module.exports = { initPrimus };
