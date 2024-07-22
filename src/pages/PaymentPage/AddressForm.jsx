import React from 'react';
import { Form, Input, Button } from 'antd';

function AddressForm({ onFinish, initialValues }) {
    return (
        <Form
            layout='vertical'
            onFinish={onFinish}
            initialValues={initialValues}
        >
            <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please enter your address!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: 'Please enter your phone number!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Continue
                </Button>
            </Form.Item>
        </Form>
    );
}

export default AddressForm;