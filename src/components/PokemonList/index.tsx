import React from 'react';
import "./styles.css"
import { propTypes } from '../../utils/interfaces';
const PokemonList = (props:propTypes) => {

  return (
    <div className='PokemonList'>
        {props.children}
    </div>
  )
}

export default PokemonList;
