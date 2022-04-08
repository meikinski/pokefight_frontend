import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Home from "./components/Home";
import PokemonOverview from "./components/PokemonOverview";
import PokemonDetail from "./components/PokemonDetail";


function App() {
  const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/pokemon')
        .then(response => response.json())
        .then(data => setPokemonData(data))
        .catch(error => console.log(error))
    }, [])

  return <div className='App'>
    <nav>
    <NavLink 
    style={({ isActive }) => {
      return {
        color: isActive ? "#FCBF49" : "",
        fontWeight: isActive ? "bold" : "",
      };
    }}
    className="navLink"
      to='/'>Home</NavLink>
    <NavLink 
    style={({ isActive }) => {
      return {
        color: isActive ? "#FCBF49" : "",
        fontWeight: isActive ? "bold" : "",
      };
    }}
    className="navLink" to='/pokemon'>Overview</NavLink>
    </nav>
    <main>
    
    
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/pokemon' element={<PokemonOverview pokemonData={pokemonData}/>}  />
      <Route exact path='/pokemon/:id' element={<PokemonDetail pokemonData={pokemonData}/>} />
    </Routes>
    </main>
  </div>;
}

export default App;
