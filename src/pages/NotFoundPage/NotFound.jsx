import React from 'react';
import MainLayout from "../../layout/MainLayout/MainLayout"
import Navbar from '../../components/navbar';

const NotFoundContainer = () => {
    return (
        <div>
            Not Found Page
        </div>
    )
}

function NotFound() {
    return (
        <MainLayout content={<NotFoundContainer />} header={<Navbar />} title={"Not Found Page"} />
    )
}

export default NotFound;