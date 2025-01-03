import React, { useEffect } from "react";
import Login from "./Login.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Browse from "./Browse.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.jsx";

const Body = () => {
  // use hooks on top
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  useEffect(() => {
    // we are using this because we want to do this once
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  // window.loc.ref used for redirecting
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
