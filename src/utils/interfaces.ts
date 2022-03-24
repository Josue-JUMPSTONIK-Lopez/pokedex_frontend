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
     types: string[]; 
}

export interface NavbarProps{
    islogged: boolean
    logIn: any,
    logOut: any
}

export interface HomeProps{
    listOfPokemons: PokemonsData[]
    pokemonsLoaded: boolean,
    islogged: boolean,
    searchPokemon: string,
    handleSearchPokemonChange: any
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
