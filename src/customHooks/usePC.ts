import { useState } from 'react'
import { PokemonCardUser } from '../utils/interfaces'

export const usePC = () => {

  const [listOfPokemonCardUser, setListOfPokemonCardUser] = useState<PokemonCardUser[]>([])
  
  function handleErrors(response:any) {
    if (!response.ok) {
        throw Error(response.statusText);

    }
    return response.json();
    }

    const getPokemons = () =>{
        fetch(`http://localhost:3001/api/v1/users/pokemonCards/${localStorage.getItem('user_id')}`)
        .then( handleErrors)
        .then( data => {
            console.log(data)
            setListOfPokemonCardUser(data);
        })
    }

    const removePokemonUser = (id: string) =>{
      setListOfPokemonCardUser(listOfPokemonCardUser.filter( (pokemon:PokemonCardUser) => pokemon.poke_id !== id))

    fetch(`http://localhost:3001/api/v1/users/pokemonCards/${id}`,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then( handleErrors)
        .then( data => {
            // console.log(data)
        })
    }

  return {
    listOfPokemonCardUser,
    getPokemons,
    removePokemonUser,
    setListOfPokemonCardUser
  }
}
