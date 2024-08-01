// 6. TypeScript with MongoDB
// Problem You want to connect to a MongoDB database and perform CRUD operations.

import { MongoClient, Db, Collection } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "testdb";
let db: Db;

interface User {
  name: string;
  age: number;
}

async function connect() {
  const client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
  console.log("Connected to database");
}

async function createUser(user: User) {
  const usersCollection: Collection<User> = db.collection("users");
  await usersCollection.insertOne(user);
  console.log("User created");
}

async function getUser(name: string): Promise<User | null> {
  const usersCollection: Collection<User> = db.collection("users");
  const user = await usersCollection.findOne({ name });
  return user;
}

connect().then(() => {
  createUser({ name: "Alice", age: 30 });
  getUser("Alice").then((user) => {
    console.log("User:", user);
  });
});
