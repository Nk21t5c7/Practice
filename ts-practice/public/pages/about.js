"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
alert('dog');
var getData = function () {
    document.getElementById("dogList").innerHTML = "";
    axios_1.default.get("/api/about")
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
