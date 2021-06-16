import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext';
import { Row, Col, Button } from 'react-bootstrap';
import "./Users.css";
import UserForm from "../Form/UserForm";

const Users = () => {
  const { users, dispatchUser } = useContext(UserContext)

  return (
    <>
      <div className="userContainer">
        {users.userData ? (
          <>
            <h1>User List</h1>
            <UserForm />
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
                </Col>
              ))}
            </Row>
          </>
        ) : (<h1>Loading...Hang on a sec</h1>)}
      </div>
    </>
  );
};

export default Users;
