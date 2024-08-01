// 5. Using TypeScript with Express
// Problem You want to create a simple REST API with Express and TypeScript.

import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

app.get("/users/:id", (req: Request, res: Response) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
