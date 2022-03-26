import './styles.css'
import { PokemonsCardProps } from '../../utils/interfaces'
import male from "../../imgs/male.png";
import female from "../../imgs/female.png";

const PokemonCard = (props:PokemonsCardProps) => {

  const pokemonsGender = () =>{
    if (props.gender[0] === 'male') {
      return male
    }else{
      return female
    }
  }

  return (
    <div className='PokemonCard'>
      { props.inHome
        ?
        <div onClick={ () => props.addPokemonUser(props.name)} className="add"> </div>
        :
        <div onClick={props.removePokemonUser} className="remove"> </div>
      }
      <img className='pokemonImage' src={props.picture} alt="Pokemon Front"/>
      <div className='genderAndName'>
        <h1 className='Pokemon-name'>{props.name}</h1>
        {props.gender.length === 1 && <img className='gender' src={pokemonsGender()} alt="Pokemon's gender" />}
      </div>
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