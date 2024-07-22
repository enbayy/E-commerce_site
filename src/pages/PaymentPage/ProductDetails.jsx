import React from 'react';
import { Button } from 'antd';

function ProductDetails({ onFinish, initialValues }) {
    const handleNext = () => {
        onFinish(initialValues);
    };

    return (
        <div>
            <h2>Product Details</h2>
            <Button type="primary" onClick={handleNext}>
                Go to Payment Information
            </Button>
        </div>
    );
}

export default ProductDetails;