import React from 'react'

const Filter= function(){
    return (
        <div className='filter-container'>
            <div className='print-type-menu'>
                <label htmlFor='print-type'>Print Type: </label>
                <select name='print-type' id='print-type'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div className='book-type-menu'>
                <label htmlFor='book-type'>Book Type: </label>
                <select name='book-type' id='book-type'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>

        </div>
    )
}

export default Filter