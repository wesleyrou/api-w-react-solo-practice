import React from 'react'

// const handleSearchSubmit=(event) =>{
//     console.log(event.target);
//     event.preventDefault();

// }

const Search = function (props) {
    return (
        <div className='search-container'>
            <form onSubmit={(e) => props.handleSearchSubmit(e)}>
                <legend hidden>Search Form</legend>
                <fieldset>
                    <label htmlFor='book-search'>Search: </label>
                    <input type='text' id='book-search' name='book-search'></input>
                    <button type='submit' value='submit'>Search</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Search