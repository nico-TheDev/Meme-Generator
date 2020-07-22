import React from "react";
import styled from "styled-components";
import MemeImg from "./MemeImg";
import MemeList from "./MemeList";
import InputList from "./InputList";
import Buttons from "./Buttons";

const MemePanel = styled.figure`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  height: 90vh;
  margin-bottom: 1rem;
`;

const PanelRight = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
`;

const Sample = styled.div`
  background: ${props => props.color};
`;

export default function Meme() {
  return (
    <MemePanel>
      <MemeImg />

      <PanelRight>
        <MemeList />
        <InputList />
        <Buttons/>
      </PanelRight>
    </MemePanel>
  );
}
