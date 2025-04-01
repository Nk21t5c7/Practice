
const breedSearch = document.getElementById('breedSearch');
breedSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const select = document.querySelector('input[name="personality"]:checked').value;
    const age = document.querySelector('input[name="age"]').value;
    console.log(select);
    document.getElementById("result").innerHTML = "";
    axios.post("http://localhost:3055/api/search", { select: select, age: age })
        .then((result) => {
            const res = result.data;
            res.forEach(e => {
                const list = document.createElement("li");
                const { breed, name, age } = e;
                list.innerText = `${name} - ${breed}, ${age}years old`;
                document.getElementById("result").append(list);
            })

        })
        .catch((err) => {
            console.log(err);

        });

});