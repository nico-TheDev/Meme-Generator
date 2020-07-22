import React, { useContext } from "react";
import styled from "styled-components";
import { MemeContext } from "./MemeContext";
import InputBox from "./InputBox";

const List = styled.div`
  display: grid;
  gap: 0.5rem;
  align-content: start;
`;
const Title = styled.h2`
  text-align: center;
  color: #3498db;
`;
export default function InputList() {
  const { currentMeme } = useContext(MemeContext);
  const newArr = [];
  for (let i = 0; i < currentMeme.box_count; i++) {
    newArr.push(<InputBox key={i} index={i} />);
  }
  const listArr = [...newArr];
  return (
    <List>
      <Title>{currentMeme.name}</Title>
      {listArr}
    </List>
  );
}
