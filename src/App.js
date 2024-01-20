// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import "./App.css"
import  Nav  from "./Nav";
const App = () => {
  return (
    <Router>
     <Nav/>
      <div>
        <Routes>
          
         
          <Route path="/" element={ <Login/>}/>
          <Route path="/login" element={  <Logout/>}/>
          <Route path="/log" element={  <Home/>}/>
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
