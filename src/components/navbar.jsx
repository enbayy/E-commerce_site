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
                    Anasayfa
                </Link>
                <Link to={getRoutePath(ROUTES_ID.contact)}>
                    İletişim
                </Link>
                <Link to={getRoutePath(ROUTES_ID.category)}>
                    Kategoriler
                </Link>
                <Link to={getRoutePath(ROUTES_ID.login)}>
                    Giriş Yap
                </Link>
                <Link to={getRoutePath(ROUTES_ID.skep)}>
                    Sepet
                </Link>
                <Link to={getRoutePath(ROUTES_ID.favorite)}>
                    Favoriler
                </Link>
            </Space>
        </>
    )
}

export default Navbar