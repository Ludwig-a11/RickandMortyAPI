import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'
import App from '../App.css'


const CardCharacter = ({resident}) => {

const character = useCharacterApi(resident)


  return (
    <article className='card-character'>
        <img src={character?.image} class="card-img-top" alt='' />
        <h3 class="list-group-item" >Name: {character?.name}</h3>
        <p class="card-text"><b>Status: </b> {character?.status}</p>
        <p class="card-text"><b>Origin: </b> {character?.origin.name}</p>
        <p class="card-text"><b>Espisodes: </b> {character?.episode.length}</p>

    </article>
  )
}

export default CardCharacter