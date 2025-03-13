import { readFileSync } from "fs";
import path from "path";

const data = JSON.parse(
  readFileSync(path.join(__dirname, "data.json"), "utf-8")
);

type Dog = {
  breed: String;
  name: String;
  age: Number;
  isNaughty: Boolean;
};

// multiple schema => resolver for each schema
const greetingResolver = {
  Query: {
    hello: () => "Hello",
  },
};

const dogResolver = {
  Query: {
    dog: (_: unknown, { breed }: { breed: string }) =>
      data.dogs.find((dog: Dog) => dog.breed === breed),
  },
};
export const resolver = {
    ...greetingResolver,
    ...dogResolver
}