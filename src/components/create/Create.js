import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const createData = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      alert("Please fill all spaces");
    } else {
      axios.post(`https://61e957717bc0550017bc6227.mockapi.io/fakeData`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  };

  return (
    <div>
      
      <div className="card">
        <form className="card-side">
          <div className=" card-side card-front">
            <div className="welcome">
              <h2>Welcome to CRUD Operations</h2>
              <p>Hover To Login</p>
            </div>
          </div>
          <div className="card-side card-back">
            {" "}
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={firstNameHandler}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={lastNameHandler}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={emailHandler}
              />
            </div>
            <div>
              <button type="submit" onClick={createData} className=" submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
