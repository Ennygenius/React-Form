import mongoose from "mongoose";
import asynchandler from "express-async-handler";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.DB_URI;

const connectDb = asynchandler(async (req, res) => {
  const connect = await mongoose.connect(db);
  console.log("Db Connected");
});

export default connectDb;
