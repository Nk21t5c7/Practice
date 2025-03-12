import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import path from "path";
import { typeDefs } from "./schema";

const data = JSON.parse(readFileSync(path.join(__dirname, "data.json"), "utf-8"));


// if theres multiple schema => resolver for each schema
const greetingResolver = {
  Query: {
    hello: () => "Hello",
  },
};

const dogSchema = {
    Query: {
        dog:(_, {})
    }
}