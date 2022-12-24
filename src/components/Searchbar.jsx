import React, { useState } from 'react'

const Searchbar = (props) => {
    let [searchTerm, setSearchTerm] = useState("")

  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
        <input type='text' placeholder='Search Jobs'
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <input type='submit' value='search'/>
    </form>
  )
}

export default Searchbar