// 7. Handling File Uploads
// Problem You want to handle file uploads in an Express server with TypeScript.

import express, { Request, Response } from "express";
import multer from "multer";

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
