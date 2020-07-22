import React, { useContext } from "react";
import styled from "styled-components";
import { MemeContext } from "./MemeContext";

const Input = styled.input`
    border: 1px solid black;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: inherit;
    padding: 0.5rem 1.5rem;
    height: 3rem;
    width: 100%;
`;

export default function InputBox({ index }) {
    const { postMemeText } = useContext(MemeContext);

    const handleChange = (e) => {
      if(e.target.value){
        postMemeText(e.target.value, index)
      }else{
        // e.target.value = '';
      }
    }

    return (
        <Input
            type="text"
            placeholder={`Text #${index + 1}`}
            onChange={handleChange}
            onKeyUp={handleChange}
        />
    );
}
