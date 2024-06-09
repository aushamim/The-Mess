import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStateProvider from "./Hooks/GlobalStateProvider";
import MainLayout from "./Components/Layout/MainLayout";
import FourOFour from "./Components/FourOFour/FourOFour";
import Home from "./Pages/Home/Home";
import Login from "./Pages/User/Login";
import Register from "./Pages/User/Register";
import DashboardLayout from "./Components/Layout/DashboardLayout";
import DashboardHome from "./Pages/Dashboard/Home/DashboardHome";
import ToLet from "./Pages/ToLet/ToLet";
import ToLetDetails from "./Pages/ToLet/ToLetDetails";
import { Toaster } from "sonner";
import MyPosts from "./Pages/Dashboard/Posts/MyPosts";
import AddPost from "./Pages/Dashboard/Posts/AddPost";
import EditPost from "./Pages/Dashboard/Posts/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <FourOFour />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "to-let",
        element: <ToLet />,
      },
      {
        path: "to-let/:id",
        element: <ToLetDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "*",
        element: <FourOFour />,
      },
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "my-posts",
        element: <MyPosts />,
      },
      {
        path: "add-post",
        element: <AddPost />,
      },
      {
        path: "edit-post/:id",
        element: <EditPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Toaster richColors position="top-center" />
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </React.StrictMode>
);
