import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
	throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose; 
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