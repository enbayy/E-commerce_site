import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import { lazy } from "react";
import { delayImport } from "./components/delayImport.jsx";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => delayImport(() => import("./pages/Contact"), 2000));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;