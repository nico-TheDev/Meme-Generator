import React, { useContext } from "react";
import styled from "styled-components";
import { MemeContext } from "./MemeContext";

const Button = styled.button`
    cursor: pointer;
    border: 1px solid #3498db;
    background: transparent;
    color: #3498db;
    padding: 0.5rem 1rem;
    display: inline-block;
    text-decoration: none;

    &:hover {
        background: #3498db;
        color: white;
    }
`;

const Download = styled.a`
    cursor: pointer;
    border: 1px solid #3498db;
    background: transparent;
    color: #3498db;
    padding: 0.5rem 1rem;
    display: inline-block;
    text-decoration: none;
    background: #3498db;
    color: white;
    text-align: center;
    font-family: Arial;

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
    const { postMemeText, finalImg, setCurrentMeme, allMemes,setFinalImg } = useContext(
        MemeContext
    );
    return (
        <ButtonGroup>
            <Button
                onClick={() => {
                    const randomMeme =
                        allMemes[Math.floor(Math.random() * allMemes.length)];
                    setCurrentMeme(randomMeme);
                    setFinalImg(randomMeme.url);
                  }}
            >
                Random
            </Button>
            <Download href={finalImg} target="_blank" download="meme">
                Download
            </Download>
        </ButtonGroup>
    );
}
