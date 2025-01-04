import React, { useState } from "react";
import Header from "./Header.jsx";
import { checkValidData } from "../utils/validate.jsx";
import { useRef } from "react";
// import bgImage from '../assets/bg.jpg';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase.jsx";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

//   const name = useRef(null);
  const email = useRef(null); // create a refernce to email and password
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  console.log("HIi");
  const handleButtonClick = () => {
    // Validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    // Sign in / Sign Up Logic
    if(!isSignInForm){
        // Sign Up Logic
        createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" - "+errorMessage);
        }) 
    }
    else {
        // Sign In logic
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-4/12 p-12 bg-black text-white opacity-85"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up "}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full name" 
              className="p-4 my-4 w-full bg-gray-800 rounded-lg"
              required
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        <p className="text-red-600 font-bold ">{errorMessage}</p>

          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up "}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Registered! Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
