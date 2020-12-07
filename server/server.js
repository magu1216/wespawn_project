import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const server = express();
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () =>
  console.log("mongoose connected to mongoDB Atlas...")
);

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.json({
    status: "this works",
  });
});

const port = 4000;
server.listen(port, () => {
  console.log(`server is open at: http://localhost:${port}`);
});
