"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./schema");
const path_1 = __importDefault(require("path"));
const resolver_1 = require("./resolver");
const app = (0, express_1.default)();
const port = 3055;
app.use(express_1.default.static("public"));
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolver_1.resolver,
});
// server.applyMiddleware({ app });
app.get("/about", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../public", "pages", "about.html"));
});
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
// app.listen(port, () => console.log(`App working on ${port}`));
(async () => {
    await server.start();
    server.applyMiddleware({ app });
    app.listen(port, () => console.log(`App working on ${port}`));
})();
