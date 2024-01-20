// src/components/Logout.js
import React from "react";
import  {auth} from "./firebase";
import { Link } from 'react-router-dom';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="text">Logout this page</h2>
     <Link to="/" > <button className="btn" onClick={handleLogout}>Logout</button></Link>
    </div>
  );
};

export default Logout;
