import { lazy } from "react";

const Contact = lazy(() => import("../pages/ContactPage/Contact.jsx"));
const Home = lazy(() => import("../pages/HomePage/Home.jsx"));
const Category = lazy(() => import("../pages/CategoryPage/Category.jsx"));
const Login = lazy(() => import("../pages/LoginPage/Login.jsx"));
const Skep = lazy(() => import("../pages/SkepPage/Skep.jsx"));
const Favorite = lazy(() => import("../pages/FavoritePage/Favorite.jsx"));

export const routes = [
    {
        id: 1,
        path: "/",
        element: <Home />,
    },
    {
        id: 2,
        path: "contact",
        element: <Contact />,
    },
    {
        id: 3,
        path: "category",
        element: <Category />,
    },
    {
        id: 4,
        path: "login",
        element: <Login />,
    },
    {
        id: 4,
        path: "skep",
        element: <Skep />,
    },
    {
        id: 5,
        path: "favorite",
        element: <Favorite />,
    },
]
