const Primus = require('primus');
const { verifyToken } = require('./utils/auth');
const clientPromise = require('./utils/mongodb');

let primus;

async function initPrimus(server) {
  if (!primus) {
    try {
      console.log('Initializing Primus...');
      primus = new Primus(server, { transformer: 'websockets' });

      // Authentication middleware
      primus.use('auth', async (spark, next) => {
        const token = spark.query.token;
        if (!token) {
          const err = new Error('Authentication token missing');
          err.statusCode = 401;
          return next(err);
        }

        try {
          const decoded = verifyToken(token);
          if (!decoded || !decoded.id) {
            const err = new Error('Invalid token');
            err.statusCode = 401;
            return next(err);
          }

          // Fetch user from MongoDB
          const dbClient = await clientPromise;
          const db = dbClient.db();
          const users = db.collection('users');
          const user = await users.findOne({ _id: ObjectId(decoded.id) });

          if (!user) {
            const err = new Error('User not found');
            err.statusCode = 401;
            return next(err);
          }

          // Attach user to the spark
          spark.user = user;
          console.log('User connected:', user._id); // Log user ID here
          next();
        } catch (err) {
          console.error('JWT verification failed:', err);
          err.statusCode = 401;
          next(err);
        }
      });

      // Handle other Primus events like connection, disconnection, etc.
      primus.on('connection', (spark) => {
        console.log('New connection:', spark.id, 'User:', spark.user);
        
        spark.on('data', (data) => {
          console.log('Received data from client:', data);
          spark.write(`Server received: ${data}`);
        });

        spark.on('end', () => {
          console.log('Connection ended:', spark.id);
        });
      });

      primus.on('disconnection', (spark) => {
        console.log('Disconnected:', spark.id);
      });

      primus.on('error', (err) => {
        console.error('Primus error:', err);
      });

      console.log('Primus initialized successfully.');
    } catch (err) {
      console.error('Error initializing Primus:', err);
      primus = null;
      throw err;
    }
  }

  return primus;
}

module.exports = { initPrimus };

