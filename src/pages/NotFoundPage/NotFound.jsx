import React from 'react';
import MainLayout from "../../layout/MainLayoutPage/MainLayout"
import Navbar from '../../components/navbar';

const NotFoundContainer = () => {
    return (
        <div>
            Sayfa Bulunamadı
        </div>
    )
}

function NotFound() {
    return (
        <MainLayout content={<NotFoundContainer />} header={<Navbar />} title={"Not Found Page"} />
    )
}

export default NotFound;