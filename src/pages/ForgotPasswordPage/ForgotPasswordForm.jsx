import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import './ForgotPassword.css';
import { useNavigate } from 'react-router-dom';
import { getRoutePath } from '../../routing/routes';
import { ROUTES_ID } from '../../routing/routes_id';
import handleResetPassword from '../../utils/forgot';

const ForgotPasswordForm = ({ onFinish }) => {
    const [email, setEmail] = useState('');


    const handleFormSubmit = (values) => {
        handleResetPassword(values.email)
    };

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(getRoutePath(ROUTES_ID.login))
    }

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-form">
                <Form
                    name="forgot_password"
                    onFinish={handleFormSubmit}
                >
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
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>

                    <Form.Item>
                        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center" }}>


                            <Button type="primary" htmlType="submit">
                                Reset Password
                            </Button>
                            <Button onClick={handleBack}>
                                Back
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
