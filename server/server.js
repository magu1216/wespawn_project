import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Services/connectAtlas.js";
import Platform from "./Models/Platform.js";

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

server.get("/platforms", (req, res) => {
  Platform.find()
    .then((platforms) => res.json(platforms))
    .catch((error) => console.log(error));
});

server.post("/platforms", (req, res) => {
  const newPlatform = req.body;
  Platform.create(newPlatform)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
});
