import React, { useContext, useState } from 'react';
import UserContext from '../../Context/UserContext';
import { Row, Col, Button, Form } from 'react-bootstrap';
import "./Users.css";
import UserForm from "../Form/UserForm";

const Users = () => {
  const { users, dispatchUser } = useContext(UserContext);

  const [modalStyle, setModalStyle] = useState({ "display": "none" });
  console.log(users);

  const hideModal = () => {
    setModalStyle({ "display": "none" });
  };

  return (
    <>
      <div className="userContainer">
        {users.userData ? (
          <>
            <h1>User List</h1>
            {/* Add form */}
            <UserForm />
            {/* User list */}
            <Row className=" userRow row-cols-lg-4">
              {users.userData.map(elem => (
                <Col key={elem.id}>
                  <p>Name: {elem.name}</p>
                  <p>Email: {elem.email}</p>
                  <p>Phone#: {elem.phone}</p>
                  <p>City: {elem.address.city}</p>
                  <Button
                    variant="outline-info"
                    className="delBtn"
                    onClick={() => dispatchUser({ type: "DEL", payload: elem.id })}
                  >Delete User</Button>
                  <Button
                    variant="outline-info"
                    className="editBtn"
                    onClick={() => { dispatchUser({ type: "EDIT", payload: elem.id }); setModalStyle({ "display": "block" }); }}
                  >Edit User</Button>
                </Col>
              ))}
            </Row>
            {/* Edit modal */}
            {users.edit.flag === true ? (
              <>
                < div className="modalContainer" style={modalStyle}>
                  <div className="editModal">
                    <button onClick={hideModal}>close</button>
                    <h2>Edit Form : id = {users.edit.id}</h2>
                    <Form>
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                        />
                      </Form.Group>
                    </Form>
                    <p>Name: Yuki</p>
                    <p>Email: yuki@gmail.com</p>
                    <p>Phone#: 2355545555</p>
                    <p>City: Vancouver</p>
                  </div>
                </div>
              </>
            ) : ""}
          </>
        ) : (<h1>Loading...Hang on a sec</h1>)}
      </div>
    </>
  );
};

export default Users;
