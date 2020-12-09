import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Services/connectAtlas.js";

//---------------running the database-----------------
connectDB();

//-------------running the server-----------------
const server = express();

server.use(express.json());
server.use(cors());

const port = 4000;
server.listen(port, () => {
  console.log(`server is open at: http://localhost:${port}`);
});

//GET request, "/" is the route, responds the status
server.get("/", (req, res) => {
  res.json({
    status: "this works",
  });
});
