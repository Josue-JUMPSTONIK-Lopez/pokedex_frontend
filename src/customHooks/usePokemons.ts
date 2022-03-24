
import { useEffect, useState } from 'react'
import { PokemonsData, pokeResquest } from '../utils/interfaces';
import PokemonList from '../components/PokemonList/index';

export const usePokemons = () => {

  const [listOfPokemons, setListOfPokemons] = useState<PokemonsData[]>([]);
  const [pokemonsLoaded, setPokemonsLoaded] = useState(false)
  const [searchPokemon, setSearchPokemon] = useState("")
  
  
  useEffect(() => {
    
    getPokemons().then( (elem) =>{
      setListOfPokemons(elem)

      setPokemonsLoaded(true)
    }) 
  },[])
 
  const getPokemons = async(numOfPokemons:number = 100) =>{

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numOfPokemons}&offset=${numOfPokemons-100}`)
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

  const handleSearchPokemonChange = (e: { target: { value: string; }; }) =>{
    let {value} = e.target;
      setSearchPokemon(value)
  }
  
  return {
    listOfPokemons,
    pokemonsLoaded,
    searchPokemon,
    handleSearchPokemonChange,
  }
}
