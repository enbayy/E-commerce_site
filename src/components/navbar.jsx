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
                <Link to={getRoutePath(ROUTES_ID.home)}>Home</Link>
                <Link to={getRoutePath(ROUTES_ID.contact)}>Contact</Link>
                <Link to={getRoutePath(ROUTES_ID.category)}>Categories</Link>
                <Link to={getRoutePath(ROUTES_ID.favorite)}>Favorites</Link>
            </Space>
            <Space>
                <Link to={getRoutePath(ROUTES_ID.skep)}><FaShoppingBasket className='icon'/></Link>
                {isAuthenticated && (
                    <>
                        <Link to={getRoutePath(ROUTES_ID.profile)}>
                            <RxAvatar className='icon'/>
                        </Link>
                    </>
                )}
                {!isAuthenticated && (
                    <Link to={getRoutePath(ROUTES_ID.login)}><HiLogin className='icon'/></Link>
                )}
                {isAuthenticated && (
                    <Link onClick={handleLogout}><IoLogOut className='icon'/></Link>
                )}
            </Space>
        </div>
    );
}

export default Navbar;