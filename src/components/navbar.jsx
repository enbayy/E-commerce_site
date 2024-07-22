import { Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { getRoutePath } from '../routing/routes';
import { ROUTES_ID } from '../routing/routes_id';
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar-container">
            <Space>
                <Link to={getRoutePath(ROUTES_ID.home)}>Home</Link>
                <Link to={getRoutePath(ROUTES_ID.contact)}>Contact</Link>
                <Link to={getRoutePath(ROUTES_ID.category)}>Categories</Link>
                <Link to={getRoutePath(ROUTES_ID.skep)}>Skep</Link>
                <Link to={getRoutePath(ROUTES_ID.favorite)}>Favorites</Link>
                <Link to={getRoutePath(ROUTES_ID.profile)}>Profile</Link>
                <Link to={getRoutePath(ROUTES_ID.payment)}>Payment</Link>
            </Space>
            <Space>
                <Link to={getRoutePath(ROUTES_ID.login)}>Login</Link>
                <Link to={getRoutePath(ROUTES_ID.login)}>Logout</Link>
            </Space>
        </div>
    );
}

export default Navbar;