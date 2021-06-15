import React, { useContext, useReducer } from 'react';
import UserContext from '../../Context/UserContext';
import { Form, Button } from 'react-bootstrap';
import "./UserForm.css";

const UserForm = () => {

  //for input onChange
  const { user, setUser } = useContext(UserContext);

  const AddUser = (dispatch, e) => {
    e.preventDefault();
    console.log(dispatch);
    console.log(e);
  };

  return (
    <>
      {/* <Form >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => { setUser({ ...user, name: e.target.value }); }}
            value={user.name} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => { setUser({ ...user, email: e.target.value }); }}
            value={user.email} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            onChange={(e) => { setUser({ ...user, phone: e.target.value }); }}
            value={user.phone} />
        </Form.Group>

        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            onChange={(e) => { setUser({ ...user, city: e.target.value }); }}
            value={user.city} />
        </Form.Group>

        <Button className="addUserBtn" type="submit">Add user</Button>

      </Form> */}
    </>


  );
};

export default UserForm;

