import { readFileSync } from "fs";
import path from "path";
import dogData from './assets/json/dog.json';

const data = JSON.parse(
  readFileSync(path.join(__dirname, "assets", "json", "dog.json"), "utf-8")
);

type Dog = {
  breed: String;
  name: String;
  age: Number;
  isNaughty: Boolean;
};

type DogByBreed = {
  breed:String;
}


export const resolvers = {
  Query: {
    dogs: () => {
      return dogData;
    },

    dogByBreed: (parent:unknown, args:DogByBreed): Dog | undefined => {
      const breed = args.breed;
      Object.entries(dogData).find(([key, dog]) =>{
        console.log(key)
      });  
      return;

    },
  },
}
