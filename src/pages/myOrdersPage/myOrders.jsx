import React from 'react'
import ProfileLayout from '../../layout/ProfileLayout';
import MyOrdersForm from './myOrdersForm';
import Navbar from '../../components/navbar';
import SiderForm from '../../components/sider';
import { getRouteTitle } from '../../routing/routes';
import { useLocation } from 'react-router-dom';

function myOrders() {
    const location = useLocation();
    const title = getRouteTitle(location.pathname);
    return (
        <ProfileLayout
            content={<MyOrdersForm />}
            header={<Navbar />}
            sider={<SiderForm />}
            title={title}
        />
    );
}

export default myOrders