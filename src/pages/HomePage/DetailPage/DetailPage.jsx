import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../../network/axiosInstance';
import './DetailPage.css'; // CSS dosyasını import edin

const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-page-container">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info-container">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: {product.price}</p>
            </div>
        </div>
    );
};

export default DetailPage;