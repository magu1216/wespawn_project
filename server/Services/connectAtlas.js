import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./server/.env" });

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@wespawndata.9a9tr.mongodb.net/wespawn_project`;
async function connectDB() {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .catch((error) => console.log(error.message));
  console.log("db is connected");
}

export default connectDB;
