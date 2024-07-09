import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Navbar from '../../components/navbar';

const FavoriteContainer = () => {
    return (
        <div>
            Favorites
        </div>
    )
}

function Favorite() {
    return (
        <MainLayout content={<FavoriteContainer />} header={<Navbar />} title={"Favorite"} />
    );
}

export default Favorite;
