import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { axiosInstance } from '../../network/axiosInstance';

function PaymentInfo({ onFinish, setUserInfo, userInfo }) {
    const handlePost = () => {
        axiosInstance.post('/myOrders')
            .then((res) => {
                console.log(res.data);
                if (onFinish) {
                    onFinish();
                }
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    return (
        <Form onFinish={handlePost} layout='vertical'>
            <Row gutter={16} style={{ marginTop: "7%" }}>
                <Col span={12}>
                    <Form.Item
                        label="First Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                        <Input onChange={(e) => setUserInfo({ ...userInfo, firstname: e.target.value })} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Last Name"
                        name="lastname"
                        rules={[{ required: true, message: 'Please enter your surname!' }]}
                    >
                        <Input onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}
                    >
                        <Input onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Card Number"
                        name="cardNumber"
                        rules={[{ required: true, message: 'Please enter your card number!' }]}
                    >
                        <Input onChange={(e) => setUserInfo({ ...userInfo, cardNumber: e.target.value })} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Expiration Date"
                        name="expiryDate"
                        rules={[{ required: true, message: 'Please enter the expiration date!' }]}
                    >
                        <Input onChange={(e) => setUserInfo({ ...userInfo, expirationDate: e.target.value })} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="CVV"
                        name="cvv"
                        rules={[{ required: true, message: 'Please enter your CVV number!' }]}
                    >
                        <Input style={{ width: "20%" }} onChange={(e) => setUserInfo({ ...userInfo, cvv: e.target.value })} />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item style={{ display: "flex", justifyContent: "end" }}>
                <Button type="primary" htmlType="submit">
                    Pay
                </Button>
            </Form.Item>
        </Form>
    );
}

export default PaymentInfo;