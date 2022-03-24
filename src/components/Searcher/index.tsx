import React from 'react';
import './styles.css';
import SearchIcon from '../SearchIcon/index';

export default function SearchBar() {
  return (
    <div className='Searcher'>
      <input className='searchBarInput'
        placeholder='Encuentra a tu Pokemón favorito'
        />
      <SearchIcon/>
    </div>
  );
}

