import React, { useContext } from "react";
import styled from "styled-components";
import { MemeContext } from "./MemeContext";

const Image = styled.img`
  height: 100%;
  display: block;
  object-position: center;
  border: 1px solid black;
`;

export default function MemeImg() {
  const { currentMeme } = useContext(MemeContext);

  return currentMeme && <Image src={currentMeme.url} alt={currentMeme.id} />;
}
