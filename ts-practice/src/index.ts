import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./schema";
import { greetingResolver } from "./resolver";
import cors from 'cors';
const port: number = 3055;

const server = new ApolloServer({ typeDefs,  resolvers:greetingResolver });

const app = express();

const startServer = async () => {
  await server.start();

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server)
  );

  app.listen(port, () => {
    console.log('server running : http://localhost:3055');
  });
};

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });
// const app = express();
// // app.use(express.static("public"));

// const startServer = async () => {
//   await server.start();

//   app.use(
//     '/graphql', //set graphql endpoint 
//     cors(), 
//     express.json(),
//     expressMiddleware(server), //apply apollo server middleware
//   );


// }

startServer();
// server.expressMiddleware({ app });

// app.get("/about", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "../public", "pages", "about.html"));
// });

// app.get("/", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

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
