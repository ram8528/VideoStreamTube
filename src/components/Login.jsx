import React, { useState } from "react";
import Header from "./Header.jsx";
import { checkValidData } from "../utils/validate.jsx";
import { useRef } from "react";
// import bgImage from '../assets/bg.jpg';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.jsx";
import { head, icon } from "../utils/constants.jsx";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null); // create a refernce to email and password
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // Sign in / Sign Up Logic
    if (!isSignInForm) {
      // Sign Up Logic
      if (name.current) {
        // Ensure name is not null
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, // Safely use name.current.value
              photoURL: icon,
            })
              .then(() => {
                // navigate("/browse");
              })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        setErrorMessage("Name is required.");
      }
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src= {head}
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
              ref={name}
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
