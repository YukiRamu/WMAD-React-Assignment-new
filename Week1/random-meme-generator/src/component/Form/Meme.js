import React, { Component } from 'react';
import "./Meme.css";
import Data from "../API/Data";

//class component
class Meme extends Component {
  state = {
    firstText: "",
    secondText: "",
    imageURL: "",
  };

  render() {
    return (
      <>
        <form className="MemeForm">
          <input
            type="text"
            className="firstText"
            placeholder="Enter your first text"
            value={this.state.firstText}
            onChange={(event) => { this.inputChange(event); }} //"elem" represents input itself
          />
          <input
            type="text"
            className="secondText"
            placeholder="Enter your second text"
            value={this.state.secondText}
            onChange={(event) => { this.inputChange(event); }} //"elem" represents input itself
          />

          <button type="button" className="generateBtn" onClick={() => {
            this.showMeme();
          }}>Generate</button>

        </form>

        <div className="MemePanel">
          <p className="first">{this.state.firstText}</p>
          <img src={this.state.imageURL} alt="meme"></img>
          <p className="second">{this.state.secondText}</p>
        </div>
      </>
    );
  };

  //when the input field is updated, setState value
  inputChange = (event) => {
    this.setState({ [event.target.className]: event.target.value });
  };

  //When the button is clicked
  showMeme = async () => {
    //variables
    const memePanel = document.querySelector(".MemePanel");
    const meme = document.querySelector(".Meme");

    //show panel
    memePanel.style.display = "block";
    meme.style.display = "flex";

    //get data 
    let imageData = await Data();
    let memeArray = imageData["data"]["memes"]; //array of object
    console.log(memeArray);

    //generate random index
    let randomIndex = Math.floor(Math.random() * memeArray.length);
    let randomImgURL = memeArray[randomIndex]["url"];
    console.log(randomImgURL);

    //setState imageURL
    this.setState({
      imageURL: randomImgURL
    });

    //clear input -- when cleared, it will clear all!!!!
    // this.setState({
    //   firstText: "",
    //   secondText: ""
    // });
  };
};

export default Meme;