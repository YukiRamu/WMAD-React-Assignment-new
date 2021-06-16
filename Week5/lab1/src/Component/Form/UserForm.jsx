import React, { useContext, useState } from 'react';
import UserContext from '../../Context/UserContext';
import { Form, Button } from 'react-bootstrap';
import "./UserForm.css";

const UserForm = () => {

  const { users, dispatchUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: { city: "" }
  });

  const AddUser = (e) => {
    e.preventDefault();
    dispatchUser({ type: "ADD", payload: newUser });
  };

  return (
    <>
      <Form className="userForm" onSubmit={AddUser}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => { setNewUser({ ...newUser, name: e.target.value }); }}
            value={newUser.name} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => { setNewUser({ ...newUser, email: e.target.value }); }}
            value={newUser.email} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            onChange={(e) => { setNewUser({ ...newUser, phone: e.target.value }); }}
            value={newUser.phone} />
        </Form.Group>

        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            onChange={(e) => { setNewUser({ ...newUser, address: { city: e.target.value } }); }}
            value={newUser.city} />
        </Form.Group>

        <Button variant="outline-info" className="addUserBtn" type="submit">Add user</Button>
      </Form>
    </>
  );
};

export default UserForm;

