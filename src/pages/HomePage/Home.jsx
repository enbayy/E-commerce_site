import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Navbar from '../../components/navbar';

const HomeContainer = () => {
  return (
    <div>Home</div>
  )
}

function Home(props) {
  console.log(props)

  return (
    <MainLayout content={<HomeContainer />} header={<Navbar />} title={"Home"} />


  );
}

export default Home;