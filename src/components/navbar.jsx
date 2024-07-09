import { Space } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <Space>
                <Link to="/">
                    Anasayfa
                </Link>
                <Link to="/contact">
                    İletişim
                </Link>
                <Link to="/category">
                    Kategoriler
                </Link>
                <Link to="/login">
                    Giriş Yap
                </Link>
                <Link to="/skep">
                    Sepet
                </Link>
                <Link to="/favorite">
                    Favoriler
                </Link>
            </Space>
        </>
    )
}

export default Navbar