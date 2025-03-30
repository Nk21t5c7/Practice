import { gql } from "graphql-tag";
import { mergeTypeDefs } from "@graphql-tools/merge";


export const Dog = gql`
  type Dog {
    breed: String
    name: String
    age: Int
    isNaughty: Boolean
  }
  type Query {
    dogs: [Dog] 
    dogByBreed(breed: String!): Dog  
    dogsByNaughty(isNaughty: Boolean!): [Dog]
  }
`;

export const typeDefs = mergeTypeDefs([Dog]);
