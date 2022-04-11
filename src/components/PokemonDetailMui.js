import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useParams } from "react-router-dom";

// MUI Icons https://mui.com/components/material-icons/
// npm install @mui/icons-material
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import "./PokemonDetailMui.css";

export default function PokemonDetailMui({ pokemonData }) {
  const params = useParams();
  console.log("=> Params: ", params);

  const pokemon = pokemonData.find((pokemon) => params.id === pokemon.id);
  console.log("=> Pokemon: ", pokemon);

  const imagePlaceholder = require("../static/contemplative-reptile.jpg");
  const cssCardWrapper = "cardWrapper";
  const cssPokemonCard = "pokemonCard";

  return (
    <>
      <h1> Single Card / MUI Layout Test </h1>
      <hr />
      <br />
      <div className={cssCardWrapper}>
        <Card className={cssPokemonCard} sx={{ maxWidth: 345 }}>
          <Typography gutterBottom variant='h5' component='div'>
            Thin Lizzy
          </Typography>

          <CardActionArea>
            <CardMedia
              component='img'
              height='180'
              image={imagePlaceholder}
              alt='green iguana'
            />

            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                <StarRoundedIcon
                  color='primary'
                  fontSize='large'
                ></StarRoundedIcon>
                {/*               {pokemon2.name.english}
                 */}{" "}
                Thin Lizzy
              </Typography>
              <Typography variant='body2' color='text.primary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <Typography variant='body3' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
      {/*       <div>
        <div>Name: {pokemon.name.english}</div>
        <div>
          Type: {pokemon.type[0]}, {pokemon.type[1]}
        </div>
        <div>Base</div>
        <div>HP: {pokemon.base.HP}</div>
        <div>Attack: {pokemon.base.Attack}</div>
        <div>Defense: {pokemon.base.Defense}</div>
        <div>Speed: {pokemon.base.Speed}</div>
      </div> */}
    </>
  );
}
