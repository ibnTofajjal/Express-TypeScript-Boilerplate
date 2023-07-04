import mongoose from "mongoose";
import app from "./app";
const port = 5000;
async function main() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/boilerplate");
        console.log(`
    ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓    
    ┃       DATABASE CONNECTED 🎉     ┃        
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
    `);

    app.listen(port, () => {
      console.log(`🏃‍♂️ App Running On:  ${port}`);
    });
  } catch (error) {
    console.log("⚠️ Connection Error: ", error);
  }
}

main();
