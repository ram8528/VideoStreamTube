import React from "react";
import Login from "./Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.jsx";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path : '/',
      element: <Login/>,
    },
    {
      path : '/browse',
      element: <Browse/>,
    },
    {
      path : '/login',
      element: <Login/>,
    },
  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
