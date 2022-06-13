import React from 'react'
import App from 'react'
const LocationInfo = ({location}) => {
    console.log(location)

  return (
    <article className='location-info'>
        <h2 className='location-name'>{location?.name}</h2>
        
        <ul>
            <li><span><b>Type: </b></span> {location?.type}</li>
            <li><span><b>Dimension: </b></span> {location?.dimension}</li>
            <li><span><b>Population: </b></span> {location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo