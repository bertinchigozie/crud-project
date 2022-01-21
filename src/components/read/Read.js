import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [readData, setReadData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const APIData = await axios(
        `https://61e957717bc0550017bc6227.mockapi.io/fakeData`
      );
      console.log(APIData.data);
      setReadData(APIData.data);
    };
    fetchData();
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, email } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Email", email);
  };
  return (
    <div className="main-table">
      <table className="table">
        <thead className="table-head">
          <tr className="table-row">
            <td className="table-data">First Name</td>
            <td className="table-data">Last Name</td>
            <td className="table-data">Email</td>
            <td className="table-data">Update</td>
            <td className="table-data">Delete</td>
          </tr>
        </thead>
        <tbody>
          {readData.map((data) => {
            return (
              <tr key={data.id}>
                <td className="table-data">{data.firstName}</td>
                <td className="table-data"> {data.lastName}</td>
                <td className="table-data">{data.email}</td>

                <td className="table-data">
                  {" "}
                  <Link to="/update" className="link">
                    <button onClick={() => setData(data)}>Update</button>{" "}
                  </Link>
                </td>

                <td className="table-data">
                  {" "}
                  <button>Delete</button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
