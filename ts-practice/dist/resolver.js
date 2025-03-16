"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const data = JSON.parse((0, fs_1.readFileSync)(path_1.default.join(__dirname, "dog.json"), "utf-8"));
// multiple schema => resolver for each schema
const greetingResolver = {
    Query: {
        hello: () => "Hello",
    },
};
const dogResolver = {
    Query: {
        dog: (_, { breed }) => data.dogs.find((dog) => dog.breed === breed),
    },
};
exports.resolver = {
    ...greetingResolver,
    ...dogResolver
};
