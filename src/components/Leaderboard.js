import { useEffect, useState } from 'react';
import Trophy from '../assets/trophy.png';

export default function Leaderboard() {

    const [resultsData, setResultsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/game/leaderboard')
        .then(response => response.json())
        .then(data => setResultsData(data))
        .catch(error => console.log(error))
    }, [])

    console.log(resultsData);

   
    

    return (

        <div className="leaderboard">
            
            <div className="leaderboard-container">
            <h1>Leaderboard</h1>
                <img src={Trophy} alt="star"/>
                <div className="leaderboard-user-header">
                    <h3>Ranking</h3>
                    <h3>Player</h3>
                    <h3>Games</h3>
                    <h3>Wins</h3>
                </div>
                <div className='leaderboard-user-card-wrapper'>
                <ol>
                    {resultsData &&
                        resultsData.map((result) =>
                        <>
                        <div className='leaderboard-user-card'>
                        <li key={result._id}>
                        <li className='result'>{result.user}</li>
                        <li className='result'>{result.games_played}</li>
                        <li className='result'>{result.games_won}</li>
                        </li>
                        </div>
                        </>)
                        
                    }
                 </ol> 
                 </div>  
                </div>
                
        </div>
    )
}