import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import handleSignUp from '../../../../utils/SignUp';
import '../../Register.css';
import { useNavigate } from 'react-router-dom';
import { getRoutePath } from '../../../../routing/routes';
import { ROUTES_ID } from '../../../../routing/routes_id';



const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
    },
};

const RegisterForm = ({ onFinish }) => {
    const [form] = Form.useForm();

    const handleFormSubmit = (values) => {
        handleSignUp({ username: values.username, email: values.email, password: values.password });
        onFinish(values);
    };

    const navigate = useNavigate();
    const handleGoLogin = () => {
        navigate(getRoutePath(ROUTES_ID.login))
    }

    return (
        <div className='register-container'>
            <Form layout='vertical'
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={handleFormSubmit}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                scrollToFirstError
            >

                <Form.Item
                    name="name"
                    label="Name"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <Button type="primary" htmlType="submit" onClick={handleGoLogin}>
                        Go Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegisterForm;