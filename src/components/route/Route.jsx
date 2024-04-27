import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Root from "../../layout/Root";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ArtsAndCrafts from "../../pages/arts-crafts/ArtsAndCrafts";
import MyArtCraft from "../../pages/MyArt-Craft/MyArtCraft";
import AddCraftItem from "../../pages/add-craft/AddCraftItem";
import CraftItemDetails from "../CraftItemDetails";
import CraftItemUpdate from "../CraftItemUpdate/CraftItemUpdate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/arts-crafts",
        element: <ArtsAndCrafts></ArtsAndCrafts>,
      },
      {
        path: "/craft/:id",
        element: <CraftItemDetails></CraftItemDetails>,
      },
      {
        path: "/my-arts-crafts",
        element: <MyArtCraft></MyArtCraft>,
      },
      {
        path: "/add-craft-item",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/update/:id",
        element: <CraftItemUpdate></CraftItemUpdate>
      },
    ],
  },
]);
