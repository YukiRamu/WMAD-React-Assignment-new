import React from "react";
import "./Form.css";

//props = singleUser
const Form = (props) => {

  //when the input is changed
  const handleChange = (event) => {
    console.log("input changed");
    console.log(event);
    console.log(props.user.id);
    console.log(props.user.name);
    console.log(props.user.email);
    console.log(props.user.phrase);

    //find which input is changed
    console.log(event.target.className);
    //need to change state hook so as to change the value of input
    //update only the target input
    switch (event.target.className) {
      case "name":
        props.setUser({
          id: props.user.id,
          name: event.target.value, //update
          email: props.user.email,
          phrase: props.user.phrase
        });
        break;
      case "email":
        props.setUser({
          id: props.user.id,
          name: props.user.name,
          email: event.target.value,  //update
          phrase: props.user.phrase
        });
        break;
      case "phrase":
        props.setUser({
          id: props.user.id,
          name: props.user.name,
          email: props.user.email,
          phrase: event.target.value,  //update
        });
        break;
      default:
        break;
    }
  };

  //when save button is clicked
  const handleSubmit = (event) => {
    console.log("save clicked");
    event.preventDefault();
    console.log(props.user.id);
    console.log(props.user.name);
    console.log(props.user.email);
    console.log(props.user.phrase);

    //get the index from userList to be updated (id-1)
    let targetIndex = event.target.childNodes[1].innerText - 1;

    //update the user 
    props.updateUser(targetIndex);

    //close form modal
    props.setModal({ "display": "none" });
  };

  //when close button is clicked
  const closeModal = () => {
    //close form modal
    props.setModal({ "display": "none" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="button" className="closeBtn" onClick={closeModal}>Close</button>
        <p className="id">{props.user.id}</p>
        <label>Name:
          <input type="text" value={props.user.name} className="name" placeholder="enter name" onChange={handleChange} />
        </label>
        <label>Email:
          <input type="text" value={props.user.email} className="email" placeholder="enter email address" onChange={handleChange} />
        </label>
        <label>Company Phrase:
          <input type="text" value={props.user.phrase} className="phrase" placeholder="enter phrase" onChange={handleChange} />
        </label>
        <button type="submit" className="saveBtn">Save</button>
      </form>
    </>
  );
};

export default Form;
