import React, { useState, Fragment } from "react";
import Wrapper from "./Components/Helpers/Wrapper";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    // check on Fragments, instead of creating a Wrapper, we can return <></> empty which will not create div in DOM
    // or <React.Fragment></React.Fragment>, or additionally import Fragment and then just use it as below
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
