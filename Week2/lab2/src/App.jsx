import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./component/Form/Form.jsx";
import User from "./component/User/User.jsx";

const App = () => {
  //state hook : array of object
  const [userList, setUserList] = useState([]);
  const [maxId, setMaxId] = useState(); //for add user feature
  const [modalStyle, setModal] = useState({}); //form modal
  const [singleUser, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phrase: "",
    editUserFlg: false
  }); //edit and update form : if I don't set the initial value, I will get the warning.

  /*========== When the window is loaded ==========*/
  useEffect(() => {
    //fetch user
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw (response.statusText);
        } else {
          const userData = await response.json();

          //set state hook: maxId for add new usr feature
          // let maxId = userData.reduce((a, b) => a.id > b.id ? a.id : b.id);
          setMaxId(Math.max(...userData.map(elem => elem.id)));

          //set state hook: userList : array of object
          setUserList(userData.map((elem) => {
            return {
              id: elem.id,
              name: elem.name,
              email: elem.email,
              phrase: elem.company.catchPhrase,
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

  /* =========== when the delete button is clicked in User.js)=========== */
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

  /* =========== when the edit button is clicked --> form will open ===========*/
  const editUser = (event) => {
    console.log("!!!!!!!!edit button is clicked!!!!!!!!!!!");
    //get target idm name, email and company phrase and set state hook
    let id = event.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText.slice(4);

    let name = event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText.slice(6);

    let email = event.target.previousSibling.previousSibling.previousSibling.innerText.slice(7);

    let phrase = event.target.previousSibling.previousSibling.innerText.slice(16);

    //to open form modal with current input value
    setUser({
      id: id, //string
      name: name,
      email: email,
      phrase: phrase,
      editUserFlg: true, //turn on editing flag
      maxId: maxId
    });

    //show form modal
    setModal({ "display": "block" });
  };

  /* ========= when the save button is clicked --> update the userlist ==========*/
  const updateUser = (targetId) => {
    console.log("updating a single user ", targetId, userList, singleUser);
    console.log(typeof (targetId));

    //find the index of userList that has the id = targetId
    let targetIndex = userList.findIndex(elem => elem.id == targetId);
    console.log("tragetIndex is ", targetIndex);

    //**************** Working on an adding user feature ********** */
    if (targetIndex === -1) {
      //adding a new user
      userList.push({
        id: targetId,
        name: singleUser.name,
        email: singleUser.email,
        phrase: singleUser.phrase,
      });
      setUserList(userList);
    } else {
      //updating the existing user
      //delete the old element from userList and add a new element
      userList.splice(targetIndex, 1, singleUser);
    }
  };

  /*========== When the add new button is clicked --> form will open  ==========*/
  const addNewUser = () => {
    //to open form modal with empty
    setUser({
      id: null, //number
      name: "",
      email: "",
      phrase: "",
      editUserFlg: true, //turn on editing flag
      maxId: maxId
    });

    //show form modal
    setModal({ "display": "block" });
  };

  return (
    <>
      {/* Header and buttonsr */}
      <header className="App-header">
        <h1>React Form : User List</h1>
      </header>

      <button type="button" onClick={addNewUser}>Add New</button>

      {/* Form Modal : default display none */}
      <section className="formPanel" style={modalStyle}>
        <Form
          user={singleUser}
          maxId={maxId}
          setModal={setModal}
          setUser={setUser}
          updateUser={updateUser}
          setMaxId={setMaxId} />
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
