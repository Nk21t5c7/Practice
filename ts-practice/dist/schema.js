"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = exports.dog = exports.greeting = void 0;
const graphql_tag_1 = require("graphql-tag");
const merge_1 = require("@graphql-tools/merge");
exports.greeting = (0, graphql_tag_1.gql) `
  type Query {
    hello: String
  }
`;
exports.dog = (0, graphql_tag_1.gql) `
  type Query {
    breed: String,
    name: String,
    age: Int,
    isNaughty: Boolean
  }
`;
// Number = Int / Float
// have to merge and export one typeDefs
exports.typeDefs = (0, merge_1.mergeTypeDefs)([exports.greeting, exports.dog]);
