import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./component/Form/Form.jsx";
import User from "./component/User/User.jsx";

const App = () => {
  //state hook : array of object
  const [userList, setUserList] = useState([]);
  const [editUserFlg, setEditUser] = useState(false);
  const [modalStyle, setModal] = useState(); //form modal
  const [singleUser, setUser] = useState({}); //edit and update form

  //When the window is loaded
  useEffect(() => {
    //fetch user
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw (response.statusText);
        } else {
          const userData = await response.json();
          console.log(userData);
          //set state hook: array of object
          setUserList(userData.map((elem) => {
            return {
              id: elem.id,
              name: elem.name,
              email: elem.email,
              phrase: elem.company.catchPhrase
            };
          }));
        }
      } catch (error) {
        console.error(error);
        return error;
      }
    };
    fetchUser();
    return () => {
      //write clear function here
    };
  }, []);

  //when the delete button is clicked (User.js)--> delete the user
  const deleteUser = (event) => {
    //find the target name from userList (state hook)
    let targetName = event.target.previousSibling.previousSibling.previousSibling.innerText.slice(6);

    // let index = event.target.attributes[2].value;
    // console.log(typeof(index))

    //delete from the userList
    //** IMPORTANT!!: filterはtarget elementを抜いたArrayがreturnされる。spliceはtarget elementがreturnされる。spliceだと効かない。
    let newUserList = userList.filter((elem) => elem.name !== targetName);
    setUserList(newUserList);
    // userList.splice(parseInt(index),1);
    // console.log(userList)
    // setUserList(userList)
  };

  //when the edit button is clicked --> form will open
  const editUser = (event) => {
    console.log("edit button is clicked");
    //get target idm name, email and company phrase and set state hook
    let id = event.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText.slice(4);

    let name = event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText.slice(6);

    let email = event.target.previousSibling.previousSibling.previousSibling.innerText.slice(7);

    let phrase = event.target.previousSibling.previousSibling.innerText.slice(16);

    //to open form modal with current input value
    setUser({
      id: id,
      name: name,
      email: email,
      phrase: phrase
    });

    //set editUserFlg
    setEditUser(true);

    //show form modal
    setModal({ "display": "block" });
  };

  //when the save button is clicked --> update the userlist
  const updateUser = (targetIndex) => {
    console.log(targetIndex, userList, singleUser);
    let updatedUserList = userList.splice(targetIndex, 1, singleUser);
    console.log(updatedUserList);
  };

  return (
    <>
      <header className="App-header">
        <h1>React Form : User List</h1>
      </header>
      {/* Form Modal */}
      <section className="formPanel" style={modalStyle}>
        <Form
          user={singleUser}
          setModal={setModal}
          setUser={setUser}
          updateUser={updateUser} />
      </section>
      <section className="userPanel">
        <User
          userList={userList}
          delUserFunc={deleteUser}
          editUserFunc={editUser} />
      </section>
    </>
  );
};

export default App;
