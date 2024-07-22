import React from 'react';
import { Form, Input, Button } from 'antd';

function PaymentInfo({ onFinish }) {
    return (
        <Form onFinish={onFinish} layout='vertical'>
            <Form.Item
                label="Card Number"
                name="cardNumber"
                rules={[{ required: true, message: 'Please enter your card number!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Expiration Date"
                name="expiryDate"
                rules={[{ required: true, message: 'Please enter the expiration date!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="CVV"
                name="cvv"
                rules={[{ required: true, message: 'Please enter your CVV number!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Pay
                </Button>
            </Form.Item>
        </Form>
    );
}

export default PaymentInfo;