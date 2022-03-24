import { useEffect } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import { usePokemons } from './customHooks/usePokemons';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Account } from './containers/Account';
import { useUsers } from './customHooks/useUsers';
import { CreateAccount } from './containers/CreateAccount';
import { PC } from './containers/PC';
import { LogIn } from './containers/LogIn/index';


const App = () => {

  const {listOfPokemons,
    pokemonsLoaded,
    searchPokemon,
    handleSearchPokemonChange,} = usePokemons()
  const {islogged, logIn, logOut} = useUsers();
    
  return (
  <Router>
    <Navbar islogged={islogged} logIn={logIn} logOut={logOut}/>
    <Layout>
      <Routes>
        <Route path='/' element={<Home 
            listOfPokemons={listOfPokemons} 
            pokemonsLoaded={pokemonsLoaded} 
            islogged={islogged} 
            searchPokemon={searchPokemon}
            handleSearchPokemonChange={handleSearchPokemonChange}
            />}/>
        <Route path='Account' element={<Account/>}/>
        <Route path='CreateAccount' element={<CreateAccount logIn={logIn}/>}/>
        <Route path='LogIn' element={<LogIn logIn={logIn}/>}/>
        <Route path='PC' element={<PC/>}/>
      </Routes>
    </Layout>
  </Router>
  ); 
};

// export default connect(mapStateToProps, mapDispatchToProps, App);
export default App;

