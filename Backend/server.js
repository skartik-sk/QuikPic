import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import app from "./index.js";
configDotenv();
const DB = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@socialmedia.qyms09a.mongodb.net/?retryWrites=true&w=majority`;
const connect = async () => {
  try {
    await mongoose.connect(DB,{dbName: "SocialMedia"} );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}; 
connect() 
  ? app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    })
  : console.log("Server failed to start");
