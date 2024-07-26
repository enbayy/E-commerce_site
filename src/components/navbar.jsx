import { notification, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { getRoutePath } from '../routing/routes';
import { ROUTES_ID } from '../routing/routes_id';
import "./Navbar.css";
import { RxAvatar } from "react-icons/rx";
import { useAuth } from '../utils/AuthContext';
import { FaShoppingBasket } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { HiLogin } from "react-icons/hi";

function Navbar() {
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = async () => {
        const success = await logout();
        if (success) {
            notification.success({
                message: 'Logged out',
                description: 'You have been successfully logged out.',
                placement: 'topRight',
                duration: 3,
            });
        } else {
            notification.error({
                message: 'Logout failed',
                description: error.message,
                placement: 'topRight',
                duration: 3,
            });
        }
    };

    return (
        <div className="navbar-container">
            <Space>
                <Link to={getRoutePath(ROUTES_ID.home)} style={{ fontSize: "15px", display: "flex", alignItems: "center" }}>Home</Link>
                <Link to={getRoutePath(ROUTES_ID.contact)} style={{ fontSize: "15px", display: "flex", alignItems: "center" }}>Contact</Link>
                <Link to={getRoutePath(ROUTES_ID.category)} style={{ fontSize: "15px", display: "flex", alignItems: "center" }}>Categories</Link>
                <Link to={getRoutePath(ROUTES_ID.favorite)} style={{ fontSize: "15px", display: "flex", alignItems: "center" }} >Favorites</Link>
                <Link to={getRoutePath(ROUTES_ID.payment)} style={{ fontSize: "15px", display: "flex", alignItems: "center" }} >Payment</Link>
            </Space>
            <Space>
                <Link to={getRoutePath(ROUTES_ID.skep)}><FaShoppingBasket style={{ fontSize: "30px", display: "flex", alignItems: "center" }} /></Link>
                {isAuthenticated && (
                    <>
                        <Link to={getRoutePath(ROUTES_ID.profile)}>
                            <RxAvatar style={{ fontSize: "30px", display: "flex", alignItems: "center" }} />
                        </Link>
                    </>
                )}
                {!isAuthenticated && (
                    <Link to={getRoutePath(ROUTES_ID.login)}><HiLogin style={{ fontSize: "30px", display: "flex", alignItems: "center" }} /></Link>
                )}
                {isAuthenticated && (
                    <Link onClick={handleLogout}><IoLogOut style={{ fontSize: "30px", display: "flex", alignItems: "center" }} /></Link>
                )}
            </Space>
        </div>
    );
}

export default Navbar;