import mongoose from "mongoose";

let isConnected = false;

export const ConnectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) console.log("Mongodb is Already Connected");
  else {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
      });
      isConnected = true;
      console.log("Mongo Db Connected");
    } catch (error) {
      console.log("Mongo Db error", error);
    }
  }
};
