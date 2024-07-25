import React, { useEffect } from 'react';
import MainLayout from '../../layout/MainLayoutPage/MainLayout';
import Navbar from '../../components/navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { getRouteTitle } from '../../routing/routes';
import HomeForm from './pageComponents/HomeForm/HomeForm';

function Home() {
  const location = useLocation();
  const title = getRouteTitle(location.pathname);

  return (
    <><MainLayout content={<HomeForm />} header={<Navbar />} title={title} /></>
  );
}

export default Home;