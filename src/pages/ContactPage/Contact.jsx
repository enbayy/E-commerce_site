// About.js

import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Navbar from '../../components/navbar';

const ContactContainer = () => {
  return (
    <div>
      Contact
    </div>
  )
}

function Contact() {
  return (
    <MainLayout content={<ContactContainer />} header={<Navbar />} title={"Contact"}/>
  );
}

export default Contact;
