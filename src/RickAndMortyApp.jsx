import React, { useState,useEffect } from 'react'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hooks/useLocationApi'
 



const RickAndMortyApp = () => {
  
  const [searchLocation, setSearchLocation] = useState()

  const location = useLocationApi(searchLocation)


  //console.log(location);
  

  return (
    <div className='main-container'>
      <div>
        <img className='header-img' src='https://i.pinimg.com/originals/5b/66/7d/5b667d877265b876259a1633403b0ec9.jpg'></img>
      </div>
      
      <InputSearch setSearchLocation={setSearchLocation}/>
      <LocationInfo  location={location}/>
      <div className='main-content'>
        {location?.residents.map(resident => (
          <CardCharacter 
            resident={resident}
            key={resident}
          />
        ))}
      </div>
      <footer className='footer'>Ludwig/Academlo</footer>
    </div>
  )
}

export default RickAndMortyApp
