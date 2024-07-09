import { lazy } from "react";
import { delayImport } from "../components/delayImport.jsx";
import MainLayout from "../layout/MainLayout/MainLayout.jsx";

const Contact = lazy(() => import("../pages/ContactPage/Contact.jsx"));
const Home = lazy(() => import("../pages/HomePage/Home.jsx"));

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
]
