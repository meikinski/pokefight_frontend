import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import React, {useEffect, useState} from "react";


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
      <Route exact path='/'  />
      <Route exact path='/pokemon'  />
      <Route exact path='/pokemon/:id'  />
    </Routes>
    </main>
  </div>;
}

export default App;
