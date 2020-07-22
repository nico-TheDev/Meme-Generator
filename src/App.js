import React from "react";
import "./styles.css";
import Nav from "./components/Nav";
import MemeContextProvider from "./components/MemeContext";
import Meme from "./components/Meme";

export default function App() {
  return (
    <MemeContextProvider>
      <div className="App">
        <Nav />
        <Meme />
      </div>
    </MemeContextProvider>
  );
}
