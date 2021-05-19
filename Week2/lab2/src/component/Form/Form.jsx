import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = (props) => {

  //state hook
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [companyPhrase, setPhrase] = useState();

  //save new user data
  const handleSubmit = (event) => {
    console.log("save clicked");
    event.preventDefault();
    console.log(event);

    //close form modal
    props.setModal({ "display": "none" });
  };

  //close modal
  const closeModal = () => {
    //close form modal
    props.setModal({ "display": "none" });
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <button type="button" className="closeBtn" onClick={closeModal}>Close</button>
        <label>Name:
          <input type="text" value={name} className="nameInput" placeholder="enter name" />
        </label>
        <label>Email:
          <input type="text" value={email} className="emailInput" placeholder="enter email address" />
        </label>
        <label>Company Phrase:
          <input type="text" value={companyPhrase} className="phraseInput" placeholder="enter phrase" />
        </label>
        <button type="submit" className="saveBtn">Save</button>
      </form>
    </>
  );

};

export default Form;
