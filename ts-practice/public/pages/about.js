
export const getData = () => {
    // alert("dog");
    document.getElementById("dogList").innerHTML = "";
    axios.get("http://localhost:3055/api/about")
      .then((result) => {
        console.log(result);
        const data = result.data.dogs;
        data.forEach(e => {
          const list = document.createElement("li");
          const { breed, name, age, isNaughty } = e;
          list.innerText = `${name} - ${breed}, ${age}years old`;
          if (isNaughty) {
            list.innerHTML += '<i class="fa-solid fa-skull"></i>';
          }
          // ! = not null/undefined
          document.getElementById("dogList").append(list);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  getData();