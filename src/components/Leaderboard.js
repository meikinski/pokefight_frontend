import Trophy from '../assets/trophy.png';

export default function Leaderboard() {
    return (
        <div className="leaderboard">
            
            <div className="leaderboard-container">
            <h1>Leaderboard</h1>
                <img src={Trophy} alt="star"/>
                <div className="leaderboard-user-header">
                    <h3>Ranking</h3>
                    <h3>User</h3>
                    <h3>Games</h3>
                    <h3>Wins</h3>
                    <h3>Losses</h3>
                </div>
                <div className="leaderboard-user-card">
                    <p>1</p>
                    <p>Computer</p>
                    <p>50</p>
                    <p>20 </p>
                    <p>30 </p>
                </div>
            </div>
        </div>
    )
}