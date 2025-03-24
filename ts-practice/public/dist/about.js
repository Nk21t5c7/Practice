import axios from "axios";
export var getData = function () {
    alert("dog");
    document.getElementById("dogList").innerHTML = "";
    axios.get("http://localhost:3055/api/about")
        .then(function (result) {
        console.log(result);
        var data = result.data.dogs;
        data.forEach(function (e) {
            var list = document.createElement("li");
            var breed = e.breed, name = e.name, age = e.age, isNaughty = e.isNaughty;
            list.innerText = "".concat(name, " - ").concat(breed, ", ").concat(age, "years old");
            if (isNaughty) {
                list.innerHTML += '<i class="fa-solid fa-skull"></i>';
            }
            // ! = not null/undefined
            document.getElementById("dogList").append(list);
        });
    })
        .catch(function (err) {
        console.log(err);
    });
};
getData();
