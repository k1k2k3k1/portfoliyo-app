import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
   
    try {
      
      

      // Sign in with Google popup
      //await signInWithPopup(auth, provider);
      const user =  (await signInWithPopup(auth, provider)).user;
      // Redirect to the root page if a user is logged in

  if (user) {

  navigate('/log');
  
  }
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">

     
      <div> <img src="https://1000logos.net/wp-content/uploads/2016/11/Google-Logo-2009.jpg"
      height="20%" width=" 30%"></img></div>
       <h2 className="text">Login with Google</h2>
      <button className="btn" onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
