import React from 'react'
import useCharacterApi from '../hooks/useCharacterApi'
import App from '../App.css'


const CardCharacter = ({resident}) => {

const character = useCharacterApi(resident)


  return (
    <div className='card-character'>
      <article>
          <img src={character?.image} class="card-img-top" alt='' />
          <h3 className="list-group-item">Name: {character?.name}</h3>
          <p className="card-text"><b>Species: </b>{character?.species} </p>
          <p className="card-text"><b>Status: </b>{character?.status}</p>
          <p className="card-text"><b>Origin: </b>{character?.origin.name}</p>
          <p className="card-text"><b>Espisodes: </b>{character?.episode.length}</p>
      </article>
    </div>
  )
}

export default CardCharacter