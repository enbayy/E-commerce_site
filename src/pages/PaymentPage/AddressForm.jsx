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
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: 'Please enter your phone number!' }]}
                style={{ marginTop: "7%" }}
            >
                <Input style={{width:"30%"}} />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please enter your address!' }]}
            >
                <Input.TextArea rows={5} />
            </Form.Item>
            <Form.Item style={{ display: "flex", justifyContent: "end" }}>
                <Button type="primary" htmlType="submit">
                    Continue
                </Button>
            </Form.Item>
        </Form>
    );
}

export default AddressForm;