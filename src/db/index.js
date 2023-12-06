import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${DB_NAME}`
    );
    console.log(
      `
      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓    
      ┃       DATABASE CONNECTED 🎉     ┃        
      ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
      \n🛢  DB HOST: ${connectionInstance.connection.host} \n🛢  DB NAME: ${DB_NAME}`
    );
  } catch (error) {
    console.log("error", error);
    throw error(error);
  }
};

export default connectDB;
