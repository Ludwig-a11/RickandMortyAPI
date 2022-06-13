import React from 'react'


const InputSearch  = ({setSearchLocation}) => {
    
    

    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }


  return (
    <form class="" className='search-bar' onSubmit={searchLocation}>
        <input class="form-control" type='text' placeholder='Search in 126 dimensions'></input>
        <button className='button'>Search</button>
    </form>
  )
}

export default InputSearch