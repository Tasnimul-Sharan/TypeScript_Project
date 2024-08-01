// 8. Custom Middleware in Express
// Problem You want to create custom middleware to log request details.

import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(requestLogger);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
