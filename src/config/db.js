const mongoose = require('mongoose');

/**
 * Establish a connection to the MongoDB database.
 * Uses the `MONGODB_URI` environment variable or defaults to a local database.
 */
async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/esaltarefood';
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
