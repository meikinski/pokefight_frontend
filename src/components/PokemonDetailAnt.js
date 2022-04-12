import * as React from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./PokemonDetailAnt.css";
import "antd/dist/antd.css";
import { Progress, Card } from "antd";
import {
  AppstoreOutlined,
  FireFilled,
  RadarChartOutlined,
  SyncOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

// https://ant.design/components/progress/

export default function PokemonDetailAnt({ pokemonData }) {
  const params = useParams();
  console.log("=> total number of pokemon: ", pokemonData.length);
  console.log("=> current pokemon params.id: ", params.id);

  const pokemon = pokemonData.find((pokemon) => params.id == pokemon.id);

  // const imagePlaceholder = require("../static/contemplative-reptile.jpg");
  const cssCardWrapper = "cardWrapper";

  let pokemonName = pokemon.name.english;
  let pokemonArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  let pHP = pokemon.base.HP;
  let pAttack = pokemon.base.Attack;
  let pDefense = pokemon.base.Defense;
  let pspAttack = pokemon.base["Sp. Attack"];
  let pspDefense = pokemon.base["Sp. Defense"];
  let pSpeed = pokemon.base.Speed;

  return (
    <>
      <div className={cssCardWrapper}>
        <Card
          title={`#${pokemon.id} | ${pokemonName} Pokemon | ${pHP} HP`}
          style={{ width: 500 }}
          cover={
            <img alt='pokemon' src={pokemonArtwork} /> || (
              <Skeleton baseColor='#FF0000' highlightColor='#444' count={5} />
            )
          }
        >
          <hr />
          <Meta
            avatar={<FireFilled />}
            title='ATTACK'
            description={`Discard an Energy card attached to the defending Pokemon`}
          />
          <br />
          <Progress type='circle' percent={pAttack} width={60} />
          <hr />
          <Meta
            avatar={<RadarChartOutlined />}
            title='DEFENSE'
            description={`Your opponent's Active Pokemon is now Poisoned`}
          />

          <Progress percent={pDefense} />
          <br />
          <hr />
          <Meta avatar={<SyncOutlined spin />} title='SPEED' />

          <Progress percent={pSpeed} steps={5} strokeColor='#52c41a' />
          <hr />
          <Meta
            avatar={<AppstoreOutlined />}
            title='SPECIALS'
            description={`Special Attack: ${pspAttack} | Special Defense: ${pspDefense} `}
          />
        </Card>
        <br />
      </div>
    </>
  );
}
