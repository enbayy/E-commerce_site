import { Space } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'
import { getRoutePath } from '../routing/routes';
import { ROUTES_ID } from '../routing/routes_id';


function Navbar() {
    return (
        <>
            <Space>
                <Link to={getRoutePath(ROUTES_ID.home)}>
                    Home
                </Link>
                <Link to={getRoutePath(ROUTES_ID.contact)}>
                    Contact
                </Link>
                <Link to={getRoutePath(ROUTES_ID.category)}>
                    Categories
                </Link>
                <Link to={getRoutePath(ROUTES_ID.login)}>
                    Login
                </Link>
                <Link to={getRoutePath(ROUTES_ID.skep)}>
                    Skep
                </Link>
                <Link to={getRoutePath(ROUTES_ID.favorite)}>
                    Favorites
                </Link>
            </Space>
        </>
    )
}

export default Navbar