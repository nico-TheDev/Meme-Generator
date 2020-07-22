import React from "react";
import styled from "styled-components";

const Navi = styled.nav`
  background: #2980b9;
  padding: 2rem 5%;
  color: white;
  letter-spacing: 2px;
  height: 10vh;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export default function Nav() {
  return (
    <Navi>
      <h1 className="nav__logo">Meme Generator ✨</h1>
    </Navi>
  );
}
