import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const server = express();
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

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
