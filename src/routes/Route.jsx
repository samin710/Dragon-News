import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layout/HomeLayOut";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "category/:id",
        loader:()=>fetch("/news.json"),
        Component: CategoryNews,
      },
    ],
  },
]);
