import React, { useEffect, useState } from 'react';
import "./Meme.css";
import Data from "../API/Data";

//function component
const Meme = () => {
  //state hook
  /* useState() always returns an array with two values (current state and function to update the current state) */
  const [firstText, setFirstText] = useState();
  const [secondText, setSecondText] = useState();
  const [imageURL, setImageURL] = useState();
  const [display, setDisplay] = useState();
  const [visibility, setVisibility] = useState();

  //When the button is clicked
  const showMeme = async () => {
    //change display and show image
    setDisplay({ "display": "flex" });
    setVisibility({ "display": "block" });

    //get data 
    let imageData = await Data();
    let memeArray = imageData["data"]["memes"]; //array of object

    //generate random index
    let randomIndex = Math.floor(Math.random() * memeArray.length);
    let randomImgURL = memeArray[randomIndex]["url"];

    //set imageURL
    setImageURL(randomImgURL);
  };

  return (
    <>
      <div className="memeSection" style={display}>
        <form className="MemeForm">
          <input
            type="text"
            className="firstText"
            placeholder="Enter your first text"
            value={firstText}
            onChange={(event) => {
              setFirstText(event.target.value);
            }}
          />
          <input
            type="text"
            className="secondText"
            placeholder="Enter your second text"
            value={secondText}
            onChange={(event) => {
              setSecondText(event.target.value);
            }}
          />
          <button type="button" className="generateBtn" onClick={showMeme}>Generate</button>
        </form>

        <div className="MemePanel" style={visibility}>
          <p className="first">{firstText}</p>
          <img src={imageURL} alt="meme"></img>
          <p className="second">{secondText}</p>
        </div>
      </div>
    </>
  );
};

export default Meme;