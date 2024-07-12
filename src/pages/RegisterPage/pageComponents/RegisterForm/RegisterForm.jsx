import React from 'react';
import { Form, Input, Button } from 'antd';
import handleSignUp from '@/utils/SignUp';
import { useNavigate } from 'react-router-dom';
import { getRoutePath } from '@/routing/routes';
import { ROUTES_ID } from '@/routing/routes_id';
import '../../Register.css';

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
        navigate(getRoutePath(ROUTES_ID.login));
    };

    return (
        <div className='register-container'>
            <Form
                className='register-form'
                layout='vertical'
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
                    className="register-form-item"
                    style={{ width: '100%' }}
                >
                    <Input style={{ width: '100%' }} />
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
                    className="register-form-item"
                    style={{ width: '100%' }}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator(_, value) {
                                if (!value) {
                                    return Promise.reject(new Error('Please input your password!'));
                                }
                                if (value.length < 8) {
                                    return Promise.reject(new Error('Password must be at least 8 characters long!'));
                                }
                                if (!/[a-z]/.test(value)) {
                                    return Promise.reject(new Error('Password must contain at least one lowercase letter!'));
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return Promise.reject(new Error('Password must contain at least one uppercase letter!'));
                                }
                                if (!/[0-9]/.test(value)) {
                                    return Promise.reject(new Error('Password must contain at least one number!'));
                                }
                                if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                                    return Promise.reject(new Error('Password must contain at least one special character!'));
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                    hasFeedback
                    style={{ width: '100%' }}
                >
                    <Input.Password style={{ width: '100%' }} />
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
                    className="register-form-item"
                    style={{ width: '100%' }}
                >
                    <Input.Password style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <Button type="default" onClick={handleGoLogin}>
                        Go Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegisterForm;
