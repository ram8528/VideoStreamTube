import React from "react";
import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
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

  // useEffect(() => {
  //   // we are using this because we want to do this once
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       // const uid = user.uid;
  //       const { uid, email, displayName, photoURL } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //         })
  //       );

  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //     }
  //   });
  // }, []);

  // window.loc.ref used for redirecting
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
