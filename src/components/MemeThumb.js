import React, { useContext } from "react";
import styled from "styled-components";
import { MemeContext } from "./MemeContext";

const Thumb = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  display: inline-block;
  cursor: pointer;
`;

export default function MemeThumb({ img, name, index }) {
  const { setCurrentMeme, allMemes, currentMeme, setFinalImg } = useContext(
    MemeContext
  );

  const handleClick = e => {
    console.log(e.target);
    setCurrentMeme(allMemes[index]);
    setFinalImg(allMemes[index].url);
  };

  return <Thumb src={img} alt={name} onClick={handleClick} />;
}
