import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Home from "./components/Home";
import PokemonOverview from "./components/PokemonOverview";
import PokemonDetail from "./components/PokemonDetail";
import Leaderboard from './components/Leaderboard';
import Logo from './assets/Logo.png';


function App() {
  const [pokemonData, setPokemonData] = useState([]);

    const [playerData, setPlayerData] = useState([]);
    const [aiData, setAiData] = useState([]);

    const [pokeIndex, setPokeIndex] = useState(0);

    const [battleStarted, setBattleStarted] = useState(false);

    const [battleWon, setBattleWon] = useState("");

    const [winsInMatch, setWinsInMatch] = useState([]);

    function startFight(){
      setupEnemy();
      debugSetupPlayer();
      setBattleStarted(true);
      setWinsInMatch([0, 0]);
    }

    function debugSetupPlayer(){
      let pokesMe = [];

      for (let index = 0; index < 6; index++) {
        pokesMe.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
      }

      setPlayerData(pokesMe);

      console.log(pokesMe);
    }

    function setupEnemy(){
      let pokes = [];

      for (let index = 0; index < 6; index++) {
        pokes.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
      }

      setAiData(pokes);

      console.log(pokes);
    }

    function continueBattle(typeOfAttack){
      let pokeMe = playerData[pokeIndex]["base"];
      let pokeAi = aiData[Math.floor(Math.random() * 6)]["base"];
      console.log(pokeAi);

      let damageMe = 0;
      let damageAi = 0;

      //true = attack && false = special attack
      if(typeOfAttack == true){
        damageMe = pokeMe["Attack"] - pokeAi["Defense"];
      }
      else{
        damageMe = pokeMe["Sp. Attack"] - pokeAi["Sp. Defense"];
      }

      if(Math.random() < 0.5){
        damageAi = pokeAi["Attack"] - pokeMe["Defense"];
      }
      else{
        damageAi = pokeAi["Sp. Attack"] - pokeMe["Sp. Defense"];
      }

      if(damageMe <= damageAi){
        let currentWin = winsInMatch;
        currentWin[0]++;
        if(currentWin[0] == 4){
          setBattleStarted(false);
          setBattleWon("Player");
          console.log("AI won");
        }
        setWinsInMatch(currentWin);
      }
      else{
        let currentWin = winsInMatch;
        currentWin[1]++;
        if(currentWin[1] == 4){
          setBattleStarted(false);
          setBattleWon("Ai");
          console.log("AI won");
        }
        setWinsInMatch(currentWin);
      }

      console.log(damageAi, damageMe, winsInMatch);
    }

    function endBattle(){
      //database stuff
      setAiData([]);
      setPlayerData([]);
      setBattleWon("");
    }

    useEffect(() => {
        fetch('https://pokefight-group3.herokuapp.com/pokemon')
        .then(response => response.json())
        .then(data => setPokemonData(data))
        .catch(error => console.log(error))
    }, [])

  return <div className='App'>
    <nav>
      <img src={Logo} alt="Logo"/>
      <div className="nav-links">
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
    <NavLink 
    style={({ isActive }) => {
      return {
        color: isActive ? "#FCBF49" : "",
        fontWeight: isActive ? "bold" : "",
      };
    }}
    className="navLink" to='/leaderboard'>Leaderboard</NavLink>
    </div>
    <div className="Login">
      Login
    </div>
    </nav>
    <main>
    
    
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/pokemon' element={<PokemonOverview pokemonData={pokemonData}/>}  />
      <Route exact path='/pokemon/:id' element={<PokemonDetail pokemonData={pokemonData}/>} />
      <Route exact path='/leaderboard' element={<Leaderboard />} />
    </Routes>
    </main>
  </div>;
}

export default App;
