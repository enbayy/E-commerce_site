import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { axiosInstance } from '../../network/axiosInstance';

function PaymentInfo({ onFinish, setUserInfo, userInfo }) {
    const handlePost = () => {
        const postData = {
            address: userInfo.address,
            phoneNumber: userInfo.phoneNumber,
            firstname: userInfo.firstname,
            lastname: userInfo.lastname,
            email: userInfo.email,
            cardNumber: userInfo.cardNumber,
            expirationDate: userInfo.expirationDate,
            cvv: userInfo.cvv,
            cardOwner: userInfo.cardOwner
        };

        axiosInstance.post('/myOrders', postData)
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
        <Form style={{padding:"50px"}} onFinish={handlePost} layout='vertical'>
            <Form.Item
                label="Card Owner"
                name="cardName"
                rules={[{ required: true, message: 'Please enter your name!' }]}
            >
                <Input onChange={(e) => setUserInfo({ ...userInfo, cardOwner: e.target.value })} />
            </Form.Item>
            <Form.Item
            style={{width:"60%"}}
                label="Card Number"
                name="cardNumber"
                rules={[{ required: true, message: 'Please enter your card number!' }]}
            >
                <Input onChange={(e) => setUserInfo({ ...userInfo, cardNumber: e.target.value })} />
            </Form.Item>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Expiration Date"
                        name="expirationDate"
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
                        <Input style={{ width: "40%" }} onChange={(e) => setUserInfo({ ...userInfo, cvv: e.target.value })} />
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