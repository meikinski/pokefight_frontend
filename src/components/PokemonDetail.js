import { useParams } from 'react-router-dom';

export default function PokemonDetail({ pokemonData}) {
    const params = useParams();
    console.log(pokemonData)
    
    // eslint-disable-next-line eqeqeq
    const pokemon = pokemonData.find(pokemon => params.id == pokemon.id);
    console.log(pokemon)

    const pokemonArtwork =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  console.log("=> pokemonArtwork: ", pokemonArtwork);
    

    return (
        <div className='Pokemon_Detail'>
            <img src={pokemonArtwork} alt={pokemon.name.english} />
            <div>Name: {pokemon.name.english}</div>
            <div>Type: {pokemon.type[0]}, {pokemon.type[1]}</div>
            <div>Base</div>
            <div>HP: {pokemon.base.HP}</div>
            <div>Attack: {pokemon.base.Attack}</div>
            <div>Defense: {pokemon.base.Defense}</div>
            <div>Speed: {pokemon.base.Speed}</div>
            
            
        </div>
    )
       
    
}