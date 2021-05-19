import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./component/Form/Form.jsx";
import User from "./component/User/User.jsx";

const App = () => {
  //state hook : array of object
  const [userList, setUserList] = useState([]);
  const [editUserFlg, setEditUser] = useState(false);
  const [modalStyle, setModal] = useState();

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

          //set state hook: array of object
          setUserList(userData.map((elem) => {
            return {
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

    //delete from the userList
    //** IMPORTANT!!: filterはtarget elementを抜いたArrayがreturnされる。spliceはtarget elementがreturnされる。spliceだと効かない。
    let newUserList = userList.filter((elem) => elem.name !== targetName);
    setUserList(newUserList);
  };

  //when the edit button is clicked --> form will open
  const editUser = () => {
    console.log("edit button is clicked");
    //set editUserFlg
    setEditUser(true);
    //show form modal
    setModal({ "display": "block" });
  };

  return (
    <>
      <header className="App-header">
        <h1>React Form : User List</h1>
      </header>
      {/* Form Modal */}
      <section className="formPanel" style={modalStyle}>
        <Form setModal={setModal} />
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
