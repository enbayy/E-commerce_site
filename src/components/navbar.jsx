import { Space } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <Space>
                <Link
                    to="/contact"
                >
                    contact
                </Link>
                <Link
                    to="/"
                >
                    home
                </Link>
            </Space>
        </>
    )
}

export default Navbar