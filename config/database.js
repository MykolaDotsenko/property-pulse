import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if database is already connected, DONT CONNECT AGAIN
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }

  // connect to MongoDB
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};


export default connectDB;