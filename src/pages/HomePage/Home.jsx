import React, { useEffect } from 'react';
import MainLayout from '../../layout/MainLayoutPage/MainLayout';
import Navbar from '../../components/navbar';
import { useLocation } from 'react-router-dom';
import { getRouteTitle } from '../../routing/routes';

const HomeContainer = () => {
  return (
    <div>Home</div>
  )
}

function Home() {
  const location = useLocation();
  const title = getRouteTitle(location.pathname);

  return (
    <MainLayout content={<HomeContainer />} header={<Navbar />} title={title} />


  );
}

export default Home;