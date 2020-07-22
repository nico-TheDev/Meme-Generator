import React, { createContext, useState, useEffect } from "react";

export const MemeContext = createContext();

export default function MemeContextProvider(props) {
  const [allMemes, setAllMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState({});
  const [finalImg, setFinalImg] = useState(null);

  useEffect(() => {
    async function getMemes() {
      const response = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await response.json();

      console.table(data.data.memes);
      setAllMemes(data.data.memes);
      setCurrentMeme(data.data.memes[0]);
      setFinalImg(data.data.memes[0].url);
    }

    getMemes();
  }, []);

  const postMemeText = async (text,index) => {
    const params =
      currentMeme.count <= 2
        ? {
            method: "POST",
            body: {
              template_id:currentMeme.id,
              username: "NorbertoIgnacio",
              password: "okayrinasaidesu",
              text0: "",
              text1: "",
              boxes:[]
            }
          }
        : {};

    const response = await fetch(
      `https://api.imgflip.com/caption_image`
    ,params);

    const data = await response.json();

    console.log(data);
  };

  return (
    <MemeContext.Provider
      value={{ currentMeme, allMemes, setCurrentMeme, finalImg, setFinalImg, postMemeText }}
    >
      {props.children}
    </MemeContext.Provider>
  );
}
