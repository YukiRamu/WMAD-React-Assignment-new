import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext';
import { Row, Col } from 'react-bootstrap';
import "./Users.css";
import UserForm from "../Form/UserForm";

const Users = () => {
  const { userData, setUserData, dispatchUser } = useContext(UserContext);

  return (
    <>
      <div className="userContainer">
        {userData ? (
          <>
            <h1>User List</h1>
            <UserForm />
            <Row className=" userRow row-cols-lg-4">
              {userData.map(elem => (
                <Col key={elem.id}>
                  <p>Name: {elem.name}</p>
                  <p>Email: {elem.email}</p>
                  <p>Phone#: {elem.phone}</p>
                  <p>City: {elem.address.city}</p>
                  <button
                    type="button"
                    className="delBtn"
                    onClick={() => dispatchUser({ type: "DEL", payload: elem.id })}
                  >Delete User</button>
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
