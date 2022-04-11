import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useParams } from "react-router-dom";

// MUI Icons https://mui.com/components/material-icons/
// npm install @mui/icons-material

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";

import "./PokemonDetailMui.css";

export default function PokemonDetailMui({ pokemonData }) {
  const params = useParams();
  console.log("=> Params: ", params);

  /*   const pokemon = pokemonData.find((pokemon) => params.id === pokemon.id);
  console.log("=> Pokemon: ", pokemon); */

  const imagePlaceholder = require("../static/contemplative-reptile.jpg");
  const cssCardWrapper = "cardWrapper";
  const cssPokemonCard = "pokemonCard";

  return (
    <>
      <h1> Single Card / MUI Layout Test </h1>
      <hr />
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper />
      <Paper elevation={3} />
    </Box>
      <br />
      <div className={cssCardWrapper}>
        <Paper elevation={3} />
        <Card className={cssPokemonCard} sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<Avatar aria-label='recipe'>60</Avatar>}
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Shrimp and Chorizo Paella'
            subheader='September 14, 2016'
          />

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
    </>
  );
}
