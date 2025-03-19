import Axios from "axios";

type Dog = {
  breed: string;
  name: string;
  age: number;
  isNaughty: boolean;
};

alert('dog');
const getData = () => {
  document.getElementById("dogList")!.innerHTML = "";
  Axios.get("/api/about")
    .then((result) => {
      console.log(result);
      const data = result.data.dogs;
      data.forEach((e: Dog) => {
        const list = document.createElement("li");
        const { breed, name, age, isNaughty }: Dog = e;
        list.innerText = `${name} - ${breed}, ${age}years old`;
        if (isNaughty) {
          list.innerHTML += '<i class="fa-solid fa-skull"></i>';
        }

        // ! = not null/undefined
        document.getElementById("dogList")!.append(list);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getData();
