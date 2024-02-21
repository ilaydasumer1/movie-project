import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from './Pages/Explore.jsx';
import Genre from "./Pages/Genre.jsx";
import MyList from "./Pages/MyList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/genre",
    element: <Genre />,
  },
  {
    path: "/mylist",
    element: <MyList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

