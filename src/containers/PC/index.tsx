import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PokemonList from '../../components/PokemonList'
import { PCProps, PokemonCardUser} from '../../utils/interfaces'
import "./styles.css"
import { usePC } from '../../customHooks/usePC';
import { useEffect } from 'react';

export const PC = (props:PCProps) => {

  const {listOfPokemonCardUser, getPokemons, removePokemonUser, setListOfPokemonCardUser} = usePC()

  useEffect(() => {
    
    getPokemons()

    return () =>{
      setListOfPokemonCardUser([])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  

  return (
    <div className='PC--layout'>
      <h1>Your Pokemons</h1>
      <PokemonList>
      {listOfPokemonCardUser.map((pokemon:PokemonCardUser) => 
      <PokemonCard 
      key={pokemon.poke_id} 
      name={pokemon.name} 
      picture={pokemon.picture} 
      moves={pokemon.moves} 
      gender={pokemon.gender} 
      types={pokemon.types} 
      inHome={false}
      addPokemonUser={props.addPokemonUser}
      removePokemonUser={()=>removePokemonUser(pokemon.poke_id)}
      /> )}
      </PokemonList>
    </div>
  )
}
