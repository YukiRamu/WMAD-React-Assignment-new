import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  //state hook
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [companyPhrase, setPhrase] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" value={name} className="nameInput" placeholder="enter name"/>
        </label>
        <label>Email:
          <input type="text" value={email} className="emailInput" placeholder="enter email address"/>
        </label>
        <label>Company Phrase:
          <input type="text" value={companyPhrase} className="phraseInput" placeholder="enter phrase"/>
        </label>
        <button type="submit" className="saveBtn">Save</button>
      </form>
    </>
  );

};

export default Form;
