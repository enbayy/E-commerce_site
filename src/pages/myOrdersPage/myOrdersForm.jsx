import React from 'react';
import { useCart } from '../../utils/CartContext';
import { List, Button } from 'antd';
import { axiosInstance } from '../../network/axiosInstance';

const MyOrdersForm = () => {
    const { cartItems } = useCart();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    };

    const totalPrice = calculateTotalPrice();

    const handlePost = () => {
        const postData = {
            items: cartItems.map(item => ({
                title: item.title,
                price: item.price,
                imageSrc: item.imageSrc
            })),
            totalPrice
        };

        axiosInstance.post('/myOrders', postData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    return (
        <div className="my-orders-container">
            <h2 style={{ display: "flex", justifyContent: "center" }}>My Orders</h2>
            <div className="order-list-container">
                <List
                    itemLayout="vertical"
                    dataSource={cartItems}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<img alt={item.title} src={item.imageSrc} style={{ width: 50 }} />}
                                title={item.title}
                            />
                            <div>Price: {item.price} TL</div>
                        </List.Item>
                    )}
                />
            </div>
            <h3 style={{ display: "flex", justifyContent: "center" }}>Total Price: {totalPrice} TL</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="primary" onClick={handlePost}>
                    Save
                </Button>
            </div>
        </div>
    );
}

export default MyOrdersForm;