import React from "react";
import './App.css'
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>

        <h3><Link to="/create"><i>Create</i></Link> your student account.</h3>
        <div>
          <Routes>
            <Route exact path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
