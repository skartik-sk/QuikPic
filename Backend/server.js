import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
configDotenv()
const DB = `mongodb+srv://skartik1706:${process.env.Password}@socialmedia.qyms09a.mongodb.net/?retryWrites=true&w=majority`;
const connect = async () => {
  try {
    await mongoose.connect(DB);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

connect()
