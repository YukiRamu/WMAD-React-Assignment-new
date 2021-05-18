import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  //state hook
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [companyPhrase, setPhrase] = useState();

  return (
    <>
      <form>
        <label>Name:
          <input type="text" value={name} />
        </label>
        <label>Email:
          <input type="text" value={email} />
        </label>
        <label>Company Phrase:
          <input type="text" value={companyPhrase} />
        </label>
        <button type="button" className="saveBtn">Save</button>
      </form>
    </>
  );

};

export default Form;
