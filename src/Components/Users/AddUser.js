import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

// when using useRef, we have uncontrolled components, while with useState we have controlled components

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // commenting out useStates as they are not needed anymore due to use of useRef
  //   const [enteredUsername, setEnteredUsername] = useState("");
  //   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(); // initial value is undenfined so no need to pass anything inside parentheses

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    // enteredAge is a string, by adding + we are forcing it to convert to a number
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    // reseting input values after submit, not the best way to do it as it is manipulating the DOM, alternative would be useState commented below
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    // commenting out useStates as they are not needed anymore due to use of useRef
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // commenting out useStates as they are not needed anymore due to use of useRef

  //   const usernameChangeHandler = (event) => {
  //     setEnteredUsername(event.target.value);
  //   };

  //   const ageChangeHandler = (event) => {
  //     setEnteredAge(event.target.value);
  //   };

  const errorHandler = () => {
    setError(null);
  };

  return (
    //   due to React limitations, we need to wrap everything so one element is returned, usually that's empty <div>, depending on how many components are used
    //   there can be to many divs rendered in DOM, to avoid this we can create an Wrapper component which returns only children which is basically content below
    <Wrapper>
      {/* this syntaxs works as if there is an error, display error modal, otherwise nothing */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {/* // this is props set in Card.js(props.className) it could be any different name */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // commenting out useStates as they are not needed anymore due to use of useRef
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // commenting out useStates as they are not needed anymore due to use of useRef
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
