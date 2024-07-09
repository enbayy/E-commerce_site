import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Navbar from '../../components/navbar';

const SkepContainer = () => {
    return (
        <div>
            Skep
        </div>
    )
}

function Skep() {
    return (
        <MainLayout content={<SkepContainer />} header={<Navbar />} title={"Skep"} />
    );
}

export default Skep;
