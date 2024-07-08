import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/contact',
        element: <Contact />,
    }
]);

export default router;
