import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Services/connectAtlas.js";
import Status from "./Models/Status.js";

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

//-----------ROUTES-------------
server.get("/", (req, res) => {
  res.json({
    status: "Welcome",
  });
});

server.get("/status", (req, res) => {
  Status.find()
    .then((status) => res.json(status))
    .catch((error) => console.log(error));
});

server.post("/status", (req, res) => {
  const newStatus = req.body;
  Status.create(newStatus)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
});
