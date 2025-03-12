import { gql } from 'graphql-tag';
import { mergeTypeDefs } from "@graphql-tools/merge";

export const greeting = gql`
  type Query {
    hello: String
  }
`;


export const dog = gql`
  type Query {
    breed: String,
    name: String,
    age: Int,
    isNaughty: Boolean
  }
`;

// Number = Int / Float

// have to merge and export one typeDefs
export const typeDefs = mergeTypeDefs([greeting, dog]);
