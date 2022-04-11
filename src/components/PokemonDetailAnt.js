import * as React from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetailAnt.css";

import "antd/dist/antd.css";
import { Progress, Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  FireFilled,
  RadarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

// https://ant.design/components/progress/

export default function PokemonDetailAnt({ pokemonData }) {
  const params = useParams();
  console.log("=> pokemonData: ", pokemonData);
  console.log("=> total number of pokemon: ", pokemonData.length);
  console.log("=> current pokemon params.id: ", params.id);

  const pokemon = pokemonData.find((pokemon) => params.id == pokemon.id);
  console.log("=> Pokemon Name: ", pokemon.name.english);

  // const imagePlaceholder = require("../static/contemplative-reptile.jpg");
  const cssCardWrapper = "cardWrapper";

  const pokemonArtwork =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  console.log("=> pokemonArtwork: ", pokemonArtwork);

  return (
    <>
      <div className={cssCardWrapper}>
        <Card
          title={pokemon.name.english}
          style={{ width: 440 }}
          cover={<img alt='pokemon' src={pokemonArtwork} />}
          actions={[
            <SettingOutlined key='setting' />,
            <EditOutlined key='edit' />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <Meta title="No. 114 Vine Pokemon | HT: 3'03 WT: 77.2 lbs" />
          <br />
          <hr />
          <br />
          <Meta
            avatar={<FireFilled />}
            title='Hydro Splash'
            description={`Discard an Energy card to`}
          />
          <br />
          <Progress type='circle' percent={40} width={60} />
          <hr />
          <Meta
            avatar={<RadarChartOutlined />}
            title='Poison Powder'
            description={`Your opponent's Active Pokemon is now Poisoned`}
          />
          <br />
          {/*           <Progress type='circle' percent={90} width={60} />
           */}{" "}
          <Progress percent={100} />
          <br />
          <br />
          <hr />
          <Meta
            avatar={<FireFilled />}
            title='Flamethrower'
            description={`Discard a Flamethrower Energy attached to this Pokemon`}
          />
          <br />
          <Progress type='circle' percent={60} width={60} />
        </Card>
        <br />
      </div>
    </>
  );
}
