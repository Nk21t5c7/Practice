import React from 'react';


const Search = () => {

    // function handleSubmit(e:){

    // }
    return (
        <main>
            <h2>Search</h2>
            <form onSubmit = "handleSubmit">
                <label htmlFor = "place">Place</label>
                <input type="text" id = "place"/>

                <button>Search</button>
            </form>
        </main>
    )
}

export default Search;