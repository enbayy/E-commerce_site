import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Navbar from '../../components/navbar';

const LoginContainer = () => {
  return (
    <div>
      Login Page
    </div>
  )
}

function Login() {
  return (
    <MainLayout content={<LoginContainer />} header={<Navbar />} title={"Login"} />
  );
}

export default Login;
