import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setEmail(localStorage.getItem("Email"));
  }, []);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const updateData = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      alert("Please fill all spaces");
    } else {
      axios.put(`https://61e957717bc0550017bc6227.mockapi.io/fakeData/${id}`, {
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
      <div>
        <form>
          <div className="card update-card">
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
              <Link to="/creat" className="link" onClick={updateData}>
                <button type="submit" className=" submit">
                  Update
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
