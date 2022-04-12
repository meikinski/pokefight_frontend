import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PokemonOverview({ pokemonData }) {
  const params = useParams();

  return (
    <div className='Pokemon_Overview'>
      <h1>See all Pokemon</h1>
      <h5>(Click on a name to get more Details!)</h5>
      <ul>
        {pokemonData &&
          pokemonData.map((pokemon) => (
            <>
              <li key={pokemon.id}>
                <Link
                  to={`/pokemon/${pokemon.id}`}
                  params={params.id}
                  className='link'
                >
                  <div className='pokemonInfo'>
                    <h4>{pokemon.name.english}</h4>
                  </div>
                </Link>
              </li>
            </>
          ))}
      </ul>
    </div>
  );
}
