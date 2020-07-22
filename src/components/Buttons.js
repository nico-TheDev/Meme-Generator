import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #3498db;
  background: transparent;
  color: #3498db;
  padding: 0.5rem 1rem;

  &:hover {
    background: #3498db;
    color: white;
  }
`;

const Download = styled(Button)`
  background: #3498db;
  color: white;

  &:hover {
    background: transparent;
    color: #3498db;
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export default function Buttons() {
  return (
    <ButtonGroup>
      <Button>Random Meme</Button>
      <Download>Download</Download>
    </ButtonGroup>
  );
}
