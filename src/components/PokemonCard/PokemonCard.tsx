
import React from 'react'
import { MAIN_COLOR} from '../../utils/constants'
import './styles.css'
import { PokemonsData } from '../../utils/interfaces'

const PokemonCard = (props:PokemonsData) => {
  return (
    <div className='PokemonCard'>
      <div className="favorite"> </div>
      <img className='pokemonImage' src={props.picture} alt="Pokemon Front"/>
      <h1 className='Pokemon-name'>{props.name}</h1>
      <div className='Pokemon-types'>
        {props.types.map( type => <label className={`type ${type}`}>{type}</label>)}
      </div>
      <p className='moves'>Moves:</p>
      <ul> 
        {props.moves.map( move => <li>{move}</li>)}
      </ul>
    </div>
  )
} 

export default PokemonCard