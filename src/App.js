import React from "react";
import "./App.css";
import Create from "./components/create/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Read from "./components/read/Read";
import Update from "./components/update/Update";

function App() {
  return (
    <Router>
      <div className="container">
        <h2>SIMPLE REACT CRUD OPERATION</h2>
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
