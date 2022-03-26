
import { useEffect, useState } from 'react'
import { PokemonsData, pokeResquest } from '../utils/interfaces';

export const usePokemons = () => {

  const [listOfPokemons, setListOfPokemons] = useState<PokemonsData[]>([]);
  const [pokemonsLoaded, setPokemonsLoaded] = useState(false)
  const [searchPokemon, setSearchPokemon] = useState("")
  const [countOfPokemons] = useState(1000)
  
  
  useEffect(() => {
    
    getPokemons().then( (elem) =>{
      setListOfPokemons(elem)

      setPokemonsLoaded(true)
    }) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function handleErrors(response:any) {
    if (!response.ok) {
        throw Error(response.statusText);

    }
    return response.json();
}
 
  const getPokemons = async() =>{

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${countOfPokemons}&offset=0`)
    const data = await response.json()

    let promises = data.results.map((pokeEndpoint:pokeResquest) => 
    fetch(pokeEndpoint.url).then(data => data.json()))

    let pokemonData = await Promise.all(promises);

    const pokemonList: PokemonsData[] = [];
    pokemonData.forEach( (pokeData:any) =>{
      pokemonList.push(
        {
        name: pokeData.name,
        picture: pokeData.sprites.front_default,
        moves: pokeData.moves.map( (move:any) => move.move.name),
        gender: ['male', 'female'],
        types: pokeData.types.map( (type:any) => type.type.name),
      })
    })

    return pokemonList;
  }

  const addPokemonUser = (name: string) =>{
      const date = new Date();
      const pokemonToAdd = listOfPokemons.find( pokemon => pokemon.name === name);
      const newPokemonUser = {
        poke_id: '0',
        trainer_id: localStorage.getItem('user_id') ?? '-1',
        key_id: String(date.getTime()),
        name: pokemonToAdd?.name ?? "",
        nickname: pokemonToAdd?.name ?? "",
        picture: pokemonToAdd?.picture ?? "", 
        moves: String(pokemonToAdd?.moves), 
        gender: String(pokemonToAdd?.gender[Math.floor(Math.random() * 2)]), 
        types: String(pokemonToAdd?.types)
      }
      
      fetch('http://localhost:3001/api/v1/users/pokemonCards',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPokemonUser)
        })
        .then( handleErrors)
        .then( data => {
            console.log(data)
        })
  }

  const doSomething = (event: any) =>{
    console.log(event)
  }

  const handleSearchPokemonChange = (e: { target: { value: string; }; }) =>{
    let {value} = e.target;
      setSearchPokemon(value)
  }
  
  return {
    listOfPokemons,
    pokemonsLoaded,
    searchPokemon,
    addPokemonUser,
    doSomething,
    handleSearchPokemonChange,
  }
}
