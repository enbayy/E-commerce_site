import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout';
import Navbar from '../../components/navbar';

const CategoryContainer = () => {
    return (
        <div>
            Categories
        </div>
    )
}

function Category() {
    return (
        <MainLayout content={<CategoryContainer />} header={<Navbar />} title={"Categories"} />
    );
}

export default Category;
