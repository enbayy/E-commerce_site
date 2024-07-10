import { lazy } from "react";
import { ROUTES_ID } from "./routes_id.js";
import Register from "../pages/RegisterPage/Register.jsx";

const Contact = lazy(() => import("../pages/ContactPage/Contact.jsx"));
const Home = lazy(() => import("../pages/HomePage/Home.jsx"));
const Category = lazy(() => import("../pages/CategoryPage/Category.jsx"));
const Login = lazy(() => import("../pages/LoginPage/Login.jsx"));
const Skep = lazy(() => import("../pages/SkepPage/Skep.jsx"));
const Favorite = lazy(() => import("../pages/FavoritePage/Favorite.jsx"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFound.jsx"));

export const routes = [
    {
        id: ROUTES_ID.home,
        path: "/",
        element: <Home />,
    },
    {
        id: ROUTES_ID.contact,
        path: "/contact",
        element: <Contact />,
    },
    {
        id: ROUTES_ID.category,
        path: "/category",
        element: <Category />,
    },
    {
        id: ROUTES_ID.login,
        path: "/login",
        element: <Login />,
    },
    {
        id: ROUTES_ID.skep,
        path: "/skep",
        element: <Skep />,
    },
    {
        id: ROUTES_ID.favorite,
        path: "/favorite",
        element: <Favorite />,
    },
    {
        id: ROUTES_ID.notfound,
        path: "*",
        element: <NotFound />,
    },
    {
        id: ROUTES_ID.register,
        path: "/register",
        element: <Register />,
    },
]

export const getRoutePath = (id) => {
    return routes.find(route => route.id === id).path;
}

export const getRouteTitle = (pathname) => {
    return routes.find(route => route.path === pathname).title;
}