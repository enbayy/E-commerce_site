import React from 'react';
import { Badge, notification, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { getRoutePath } from '../routing/routes';
import { ROUTES_ID } from '../routing/routes_id';
import "./Navbar.css";
import { RxAvatar } from "react-icons/rx";
import { useAuth } from '../utils/AuthContext';
import { FaShoppingBasket } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { HiLogin } from "react-icons/hi";
import { useCart, useFavori } from '../utils/CartContext';

function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const { cartItems } = useCart();
    const { favoriItems } = useFavori();
    const navigate = useNavigate();

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
                <Badge color='pink' count={favoriItems.length}>
                    <Link to={getRoutePath(ROUTES_ID.favorite)}>Favorites</Link>
                </Badge>
                <div className="category-dropdown">
                    <Link>Category</Link>
                    <div className="category-dropdown-content">
                        <Link to={getRoutePath(ROUTES_ID.tshirt)}>T-shirts</Link>
                        <Link to={getRoutePath(ROUTES_ID.pant)}>Pants</Link>
                        <Link to={getRoutePath(ROUTES_ID.short)}>Shorts</Link>
                        <Link to={getRoutePath(ROUTES_ID.hat)}>Hats</Link>
                        <Link to={getRoutePath(ROUTES_ID.bag)}>Bags</Link>
                    </div>
                </div>
            </Space>
            <Space>
                <Link to={getRoutePath(ROUTES_ID.skep)}>
                    <Badge color='blue' count={cartItems.length}>
                        <FaShoppingBasket className='icon' />
                    </Badge>
                </Link>
                {isAuthenticated && (
                    <>
                        <Link to={getRoutePath(ROUTES_ID.profile)}>
                            <RxAvatar className='icon' />
                        </Link>
                    </>
                )}
                {!isAuthenticated && (
                    <Link to={getRoutePath(ROUTES_ID.login)}>
                        <HiLogin className='icon' />
                    </Link>
                )}
                {isAuthenticated && (
                    <Link onClick={handleLogout}><IoLogOut className='icon' /></Link>
                )}
            </Space>
        </div>
    );
}

export default Navbar;