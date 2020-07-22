import React, { useContext } from "react";
import MemeThumb from "./MemeThumb";
import { MemeContext } from "./MemeContext";
import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
`;

export default function MemeList() {
  const { allMemes } = useContext(MemeContext);
  const memeArr =
    allMemes &&
    allMemes.map((meme, index) => (
      <MemeThumb img={meme.url} name={meme.name} key={meme.id} index={index} />
    ));
  return <List>{memeArr};</List>;
}
