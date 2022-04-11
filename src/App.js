import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import PokemonOverview from "./components/PokemonOverview";
// import PokemonDetail from "./components/PokemonDetail";
// import PokemonDetailMui from "./components/PokemonDetailMui";
import PokemonDetailAnt from "./components/PokemonDetailAnt";
import Leaderboard from "./components/Leaderboard";
import Logo from "./assets/Logo.png";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  }, []);
  console.log("=> POKEMON DATA: ", pokemonData);

  return (
    <div className='App'>
      <nav>
        <img src={Logo} alt='Logo' />
        <div className='nav-links'>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#FCBF49" : "",
                fontWeight: isActive ? "bold" : "",
              };
            }}
            className='navLink'
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#FCBF49" : "",
                fontWeight: isActive ? "bold" : "",
              };
            }}
            className='navLink'
            to='/pokemon'
          >
            Pokemon Overview
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#FCBF49" : "",
                fontWeight: isActive ? "bold" : "",
              };
            }}
            className='navLink'
            to='/leaderboard'
          >
            Leaderboard Table
          </NavLink>
        </div>
        <div className='Login'>Login</div>
      </nav>
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* POKEMON LIST */}
          <Route
            exact
            path='/pokemon'
            element={<PokemonOverview pokemonData={pokemonData} />}
          />
          {/* POKEMON DETAIL BY ID */}

          <Route
            exact
            path='/pokemon/:id'
            element={<PokemonDetailAnt pokemonData={pokemonData} />}
          />

          {/* HIGHSCORE TABLE */}
          <Route exact path='/leaderboard' element={<Leaderboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
