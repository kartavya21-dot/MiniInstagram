import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='search-page'>
        <form className="input-section">
            <input type="text" placeholder='Search Person, Post...'/>
            <button type="submit" onClick={(e)=>e.preventDefault()}>Search</button>
        </form>
        <div className="result-section">
            <div className="user-set"></div>
            <div className="post-set">
            </div>
        </div>
    </div>
  )
}

export default Search