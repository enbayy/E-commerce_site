import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { getRoutePath } from '@/routing/routes';
import { ROUTES_ID } from '@/routing/routes_id';
import login from '@/utils/login';
import EmailInput from '../../../../components/EmailInput';
import PasswordInput from '../../../../components/PasswordInput';

const LoginForm = () => {
    const navigate = useNavigate();

    const handleFinish = async (values) => {
        const success = await login({
            email: values.email,
            password: values.password
        });

        if (success) {
            navigate(getRoutePath(ROUTES_ID.home));
        }
    };

    const handleGoLogin = () => {
        navigate(getRoutePath(ROUTES_ID.forgotpassword));
    };

    return (
        <div className="login-container">
            <Form
                name="normal_login"
                className="login-form"
                layout='vertical'
                initialValues={{
                    remember: true,
                }}
                onFinish={handleFinish}
            >
                <EmailInput
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <PasswordInput
                    name={"password"}
                    label={"Password"}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                />
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link onClick={handleGoLogin}>
                        Forgot password
                    </Link>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="/register">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;