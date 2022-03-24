import React from 'react'
import PokemonList from '../../components/PokemonList'
import "./styles.css"

export const PC = () => {
  return (
    <div className='PC--layout'>
      <h1>Your Pokemons</h1>
      <PokemonList>

      </PokemonList>
    </div>
  )
}
