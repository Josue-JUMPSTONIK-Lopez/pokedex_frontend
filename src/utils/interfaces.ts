import PokemonCard from '../components/PokemonCard/PokemonCard';
export interface propTypes{
    children: React.ReactNode
}

export interface pokeResquest{
    name: string,
    url: string
}

export interface PokemonsData{
     name: string, 
     picture: string, 
     moves: string[], 
     gender: string[], 
     types: string[]
}

export interface PokemonsCardProps{
    name: string, 
    picture: string, 
    moves: string[], 
    gender: string[], 
    types: string[],
    addPokemonUser: (name: string) => void,
    removePokemonUser: any,
    inHome: boolean
}

export interface NavbarProps{
    islogged: boolean
    logIn: any,
    logOut: any
}

export interface HomeProps{
    listOfPokemons: PokemonsData[]
    pokemonsLoaded: boolean,
    searchPokemon: string,
    addPokemonUser: (name: string) => void,
    handleSearchPokemonChange: any,
}

export interface SearchBarProps{
    searchPokemon: string,
    handleSearchPokemonChange: any
}

export interface CreatAccountProps{
    logIn: any
}

export interface LogInProps{
    logIn: any
}
export interface ProfileProps{
    logOut: any
}

export interface UseCreateUserProps{
    logOut: any
}
export interface PokemonCardUser{
    poke_id: string,
    trainer_id: string,
    key_id: string,
    name: string, 
    picture: string, 
    moves: string[], 
    gender: string[], 
    types: string[]
}

export interface PCProps{
    addPokemonUser: (name: string) => void,
}
