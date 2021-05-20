import React from "react";
import "./Form.css";

//props = singleUser
const Form = (props) => {
  console.log("Form.js props is", props);

  //when the input is changed
  const handleChange = (event) => {
    console.log("!!!!!!!!!!!!!!!! input changed !!!!!!!!!!!!!!!!!!");
    console.log(event);
    console.log("id", props.user.id);
    console.log("name", props.user.name);
    console.log("email", props.user.email);
    console.log("phrase", props.user.phrase);
    console.log("maxId", props.maxId);

    /* find which input is changed and need to change state hook
    // so as to change the value of input 
    // update only the target input */
    switch (event.target.className) {
      case "name":
        props.setUser({
          id: props.user.id,
          name: event.target.value, //update
          email: props.user.email,
          phrase: props.user.phrase,
          editUserFlg: props.user.editUserFlg,
          maxId: props.maxId
        });
        break;
      case "email":
        props.setUser({
          id: props.user.id,
          name: props.user.name,
          email: event.target.value,  //update
          phrase: props.user.phrase,
          editUserFlg: props.user.editUserFlg,
          maxId: props.maxId
        });
        break;
      case "phrase":
        props.setUser({
          id: props.user.id,
          name: props.user.name,
          email: props.user.email,
          phrase: event.target.value,  //update,
          editUserFlg: props.user.editUserFlg,
          maxId: props.maxId
        });
        break;
      default:
        break;
    }
  };

  //when save button is clicked
  const handleSubmit = (event) => {
    console.log("!!!!!!!!!!!!save clicked!!!!!!!!!!!!!");
    event.preventDefault();

    console.log(event);
    console.log("id", props.user.id);
    console.log("name", props.user.name);
    console.log("email", props.user.email);
    console.log("phrase", props.user.phrase);
    console.log("editing flag", props.user.editUserFlg);
    console.log("maxId is ", props.maxId);

    let targetId;
    if (props.user.id === "") {
      //when adding a new user
      targetId = props.user.maxId + 1;
    } else {
      //when ediding the existing user
      //get the index from userList to be updated
      targetId = event.target.childNodes[1].innerText; //string
    }

    //update the user 
    props.updateUser(targetId);

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
