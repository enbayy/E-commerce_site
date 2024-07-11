import React from 'react';
import MainLayout from '../../layout/MainLayoutPage/MainLayout';
import Navbar from '../../components/navbar';
import { useLocation } from 'react-router-dom';
import { getRouteTitle } from '../../routing/routes';
import { Amplify } from "aws-amplify"
import { decodeJWT } from "aws-amplify/auth"
import awsconfig from '../../amplifyconfiguration.json';

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