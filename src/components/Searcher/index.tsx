import React from 'react';
import './styles.css';
import SearchIcon from '../SearchIcon/index';
import { SearchBarProps } from '../../utils/interfaces';

export default function SearchBar(props: SearchBarProps) {
  return (
    <div className='Searcher'>
      <input value={props.searchPokemon} onChange={props.handleSearchPokemonChange} className='searchBarInput'
        placeholder='Encuentra a tu Pokemón favorito'
        />
      <SearchIcon/>
    </div>
  );
}

