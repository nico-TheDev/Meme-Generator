import React, { useContext } from "react";
import styled from "styled-components";
import { MemeContext } from "./MemeContext";

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  display: block;
  object-position: center;
  border: 1px solid black;
`;

export default function MemeImg() {
  const { currentMeme, finalImg } = useContext(MemeContext);

  return finalImg ? <Image src={finalImg} alt={currentMeme.id} /> : null;
}
