import { Space } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <Space>
                <Link
                    to="/"
                >
                    Home
                </Link>
                <Link
                    to="/contact"
                >
                    Contact
                </Link>
                <Link
                    to="/category"
                >
                    Categories
                </Link>

                <Link
                    to="/login"
                >
                    Login
                </Link>
                <Link
                    to="/skep"
                >
                    Skep
                </Link>
                <Link
                    to="/favorite"
                >
                    Favorites
                </Link>
            </Space>
        </>
    )
}

export default Navbar