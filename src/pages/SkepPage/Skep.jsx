import React from 'react';
import MainLayout from '../../layout/MainLayoutPage/MainLayout';
import Navbar from '../../components/navbar';
import { useLocation } from 'react-router-dom';
import { getRouteTitle } from '../../routing/routes';

const SkepContainer = () => {
    return (
        <div>
            Skep
        </div>
    )
}

function Skep() {
    const location = useLocation();
    const title = getRouteTitle(location.pathname);
    return (
        <MainLayout content={<SkepContainer />} header={<Navbar />} title={title} />
    );
}

export default Skep;
