
const breedSearch = document.getElementById('breedSearch');
breedSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const select = document.querySelector('input[name="breed"]:checked').value;
    console.log(select);
    axios.post("http://localhost:3055/api/search", { select: select })
        .then((result) => {
            console.log(result);


        }).catch((err) => {
            console.log(err);

        });

});