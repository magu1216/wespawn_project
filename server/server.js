import express from "express";
import path from "path";
import cors from "cors";
import { dirname } from "./helpers.js";
import dotenv from "dotenv";
import multer from "multer";
import connectDB from "./Services/connectAtlas.js";
import Platform from "./Models/Platform.js";
import fs from "fs";

//---------------running the database-----------------
connectDB();

//-------------running the server-----------------
const server = express();
dotenv.config();
server.use(express.json());
server.use(cors());
const __dirname = dirname(import.meta.url);

//-------------setting up multer-----------------
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: fileStorageEngine });

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`server is open at: http://localhost:${port}`);
});

server.use(express.static(path.join(__dirname, "../client/build")));
server.use("/images", express.static(path.join(__dirname, "./images")));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

//-----------ROUTES-------------
server.get("/api", (req, res) => {
  res.json({
    status: "Welcome",
  });
});

server.get("/platforms", (req, res) => {
  Platform.find()
    .then((platforms) => res.json(platforms))
    .catch((error) => console.log(error));
});

server.get("/picture", (req, res) => {
  const imagesFolder = path.join(__dirname, "./images");
  fs.readdir(imagesFolder, (error, files) => {
    if (error) res.json({ error: "Could not find any files" });

    res.json(files);
  });
});

server.post("/picture", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("File upload success");
});
