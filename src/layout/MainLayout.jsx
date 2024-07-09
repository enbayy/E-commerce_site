import React from "react";
import Navbar from "../components/navbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
    <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </div>
);

export default MainLayout;