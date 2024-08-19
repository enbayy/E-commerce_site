import React, { useEffect, useState } from 'react';
import Cart from '../../../../components/Cart';
import { axiosInstance } from '../../../../network/axiosInstance';
import { Col, Row, Input } from 'antd';
import './HomeForm.css';

function HomeForm() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axiosInstance.get('/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="page-container">
            <Input
                className='input'
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <Row gutter={16} className="products-row">
                {filteredProducts.map((e) => (
                    <Col key={e.id} xs={24} sm={12} md={8} lg={6}>
                        <Cart
                            id={e.id}
                            title={e.name}
                            description={e.description}
                            imageSrc={e.image}
                            price={e.price}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default HomeForm;