import express from "express";
import type { Application, Request, Response } from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./schema";
import path from "path";
import { resolver } from "./resolver";
const app: Application = express();
const port: number = 3055;

app.use(express.static("public"));

const server = new ApolloServer({
  typeDefs,
  resolvers: resolver,
});

// server.applyMiddleware({ app });

app.get("/about", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public", "pages", "about.html"));
});

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// app.listen(port, () => console.log(`App working on ${port}`));
(async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => console.log(`App working on ${port}`));
})();
