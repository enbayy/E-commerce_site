import React, { useEffect, useState } from 'react';
import Cart from '../../../../components/Cart';
import { axiosInstance } from '../../../../network/axiosInstance';
import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';

function HomeForm() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosInstance.get('/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Row gutter={16}>
                {products.map((e) => (
                    <Col key={e.id} span={8}>
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

        </>
    );
}

export default HomeForm;