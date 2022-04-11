import { Link } from 'react-router-dom'


export default function PokemonOverview({ pokemonData }) {

    

    return (
        <div className='Pokemon_Overview'>
            <h1>See all Pokemon</h1>
            <h5>(Click on a name to get more Details!)</h5>
            <ul>
            {pokemonData && 
            pokemonData.map((pokemon) => 
            <>
            <li key={pokemon.id}>  
            <Link to={`/pokemon/${pokemon.id}`} className="link">
            <div className="pokemonInfo">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name.english} />
                <h4>{pokemon.name.english}</h4>
            </div>
            </Link>
            </li>
            </>)
            }
            </ul>
        </div>
    )
}