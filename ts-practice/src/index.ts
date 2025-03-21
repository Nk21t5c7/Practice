import express, { Request, Response } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { Dog } from "./schema";
import { resolvers } from "./resolver";
import cors from "cors";
import fs from "fs";
import path from "path";

const port: number = 3055;

const server = new ApolloServer({ typeDefs: Dog, resolvers });

const app = express();
app.use(express.static(path.join(__dirname, "../public")));

const readJsonFile = (filePath: string) => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

app.get("/api/about", (req: Request, res: Response) => {
  const jsonData = readJsonFile(
    path.join(__dirname, "assets", "json", "dog.json")
  );
  console.log(jsonData);
  res.json(jsonData);
});

app.get("/search", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public", "pages", "search.html"));
});

app.get("/about", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public", "pages", "about.html"));
});

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const startServer = async () => {
  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  app.listen(port, () => {
    console.log("server running : http://localhost:3055");
  });
};

startServer();

// app.listen(port, () => console.log(`App working on ${port}`));
// (async () => {
//   await server.start();
//   server.applyMiddleware({ app });

//   app.listen(port, () => console.log(`App working on ${port}`));
// })();

// import express from 'express'
// const app = express();

// app.get('/', (_req, res) => {
//   res.send('Hello, Express');
// });

// app.listen(3055, () => {
//   console.log('Server running on http://localhost:3055');
// });
