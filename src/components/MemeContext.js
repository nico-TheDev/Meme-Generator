import React, { createContext, useState, useEffect } from "react";

export const MemeContext = createContext();

export default function MemeContextProvider(props) {
    const [allMemes, setAllMemes] = useState([]);
    const [currentMeme, setCurrentMeme] = useState({});
    const [finalImg, setFinalImg] = useState(null);
    const [bodyData, setBodyData] = useState({
        username: "icon17",
        password: "okayrinasaidesu",
        font: "Impact",
        max_font_size: "35px",
        text0: "",
        text1: "",
        boxes: [],
    });

    useEffect(() => {
        async function getMemes() {
            const response = await fetch(`https://api.imgflip.com/get_memes`);
            const data = await response.json();

            console.table(data.data.memes);
            const all = data.data.memes.filter(meme => meme.box_count <= 2);
            setAllMemes(all);
            setCurrentMeme(data.data.memes[0]);
            setFinalImg(data.data.memes[0].url);
        }

        getMemes();
    }, []);

    const postMemeText = async (text, index) => {
        const formData = new FormData();

        if (currentMeme.id) {
            formData.set("template_id", currentMeme.id);

            if (currentMeme.box_count <= 2) {
                for (let key in bodyData) {
                    formData.set(key, bodyData[key]);
                }

                // let newBody = {...bodyData};

                // newBody[`text${index}`] = text;

                setBodyData((prevState) => {
                    const newBody = { ...prevState ,boxes:[]};
                    newBody[`text${index}`] = text;

                    return newBody;
                });
            } else {
                // SET BOXES
                const newBoxes = [];
                for (let i = 0; i < currentMeme.box_count; i++) {
                    newBoxes.push({
                        "text": "",
                    });
                }

                newBoxes[index].text = text;

                setBodyData({ ...bodyData, boxes: newBoxes,text:'',text1:'' });
                console.log(newBoxes)
                
                for (let key in bodyData) {
                  formData.set(key, bodyData[key]);
              }
            }

            const params = {
                method: "POST",
                body: formData,
            };

            const response = await fetch(
                `https://api.imgflip.com/caption_image`,
                params
            );

            const data = await response.json();

            if (data.success) setFinalImg(data.data.url);
        }
    };

    return (
        <MemeContext.Provider
            value={{
                currentMeme,
                allMemes,
                setCurrentMeme,
                finalImg,
                setFinalImg,
                postMemeText,
            }}
        >
            {props.children}
        </MemeContext.Provider>
    );
}
