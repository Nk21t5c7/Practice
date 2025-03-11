import express from "express";
import type { Express, Request, Response } from "express";
import path from "path";
const app: Express = express();
const port = 3055;

app.use(express.static("public"));

app.get("/about", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public", "pages", "about.html"));
});

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(`App working on ${port}`));
