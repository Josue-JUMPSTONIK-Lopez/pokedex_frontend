import React from 'react';
import './styles.css';
import { HomeProps, PokemonsData} from '../../utils/interfaces';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import PokemonCard from '../../components/PokemonCard/PokemonCard';


function Home(props:HomeProps) {
  return (
    <div className='Home'>
      <Searcher />
            {
              props.pokemonsLoaded ?
                    <PokemonList>
                      {props.listOfPokemons.map((pokemon:PokemonsData) => 
                        <PokemonCard key={pokemon.name} name={pokemon.name} picture={pokemon.picture} moves={pokemon.moves} gender={pokemon.gender} types={pokemon.types}/>)}
                    </PokemonList>
                    :
                    <p>Pokemons are not loaded still</p>
            } 
    </div>
  );
}

export default Home;
