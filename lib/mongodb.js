import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }
  
  async function connectDB() {
    if (cached.conn) {
      return cached.conn;
    }
  
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI, {
        bufferCommands: false,
      });
    }
    cached.conn = await cached.promise;
    return cached.conn;
  }
  
  export default connectDB;