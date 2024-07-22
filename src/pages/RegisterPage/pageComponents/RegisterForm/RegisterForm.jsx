import React from 'react';
import { Form, Input, Button } from 'antd';
import handleSignUp from '@/utils/SignUp';
import { useNavigate } from 'react-router-dom';
import { getRoutePath } from '@/routing/routes';
import { ROUTES_ID } from '@/routing/routes_id';
import '../../Register.css';
import EmailInput from '../../../../components/EmailInput';
import PasswordInput from '../../../../components/PasswordInput';
import ConfirmPassword from '../../../../components/ConfirmPassword';

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
        handleSignUp({
            username: values.name,
            email: values.email,
            password: values.password
        });
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

                <EmailInput />

                <PasswordInput
                    name={"password"}
                    label={"Password"}
                />

                <ConfirmPassword />

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <Button type="default" onClick={handleGoLogin}>
                        Go Login
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default RegisterForm;