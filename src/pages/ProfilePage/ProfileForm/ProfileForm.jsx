import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import './../Profile.css';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { updateUserAttribute } from 'aws-amplify/auth';


const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} gereklidir!',
    types: {
        email: '${label} geçerli bir e-posta değil!',
        number: '${label} geçerli bir sayı değil!',
    },
    number: {
        range: '${label} ${min} ile ${max} arasında olmalıdır',
    },
};





const ProfileForm = ({ attributes }) => {
    const [form] = Form.useForm();
    const [savedData, setSavedData] = useState(null);

    async function handleUpdateUserAttribute(input) {
        try {
            const output = await updateUserAttribute({
                userAttribute: {
                    input
                }
            });
            console.log(output)
            // handleUpdateUserAttributeNextSteps(output);
        } catch (error) {
            console.log(error);
        }
    }

    const onFinish = (values) => {
        const attributeInput = {
            'custom:name': values.name,
            'custom:gender': values.gender,
            'custom:age': values.age,
            'custom:address': values.address,
        }
        handleUpdateUserAttribute(attributeInput)
        console.log(values)

        const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([_, value]) => value !== undefined && value !== null && value !== "")
        );

        if (Object.keys(filteredValues).length > 0) {
            setSavedData(filteredValues);
        } else {
            setSavedData(null);
        }
    };

    const onGenderChange = (value, form) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({ not: 'Merhaba, beyefendi!' });
                break;
            case 'female':
                form.setFieldsValue({ not: 'Merhaba, hanımefendi!' });
                break;
            case 'other':
                form.setFieldsValue({ not: 'Merhaba!' });
                break;
        }
    };

    const onClear = () => {
        form.resetFields();
        setSavedData(null);
    };

    console.log(attributes['custom:address'])
    return (
        <div className="profile-page-container">

            <Button onClick={() => handleUpdateUserAttribute('custom:address', 'İzmir')}>Update</Button>
            <Form
                initialValues={{ name: attributes['custom:name'], age: attributes['custom:age'], gender: attributes['custom:gender'], address: attributes['custom:address'] }}
                {...layout}
                layout='vertical'
                name="nest-messages"
                onFinish={onFinish}
                className="profile-form"
                validateMessages={validateMessages}
                form={form}
            >
                <Form.Item
                    name="name"
                    label="Name"
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="age"
                    label="Age"
                    rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber style={{ width: '30%' }} />
                </Form.Item>

                <Form.Item
                    style={{ width: '40%' }}
                    name="gender"
                    label="Gender"
                >
                    <Select
                        placeholder="Select a gender and change the greeting above"
                        onChange={(value) => onGenderChange(value, form)}
                        allowClear
                    >
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="address" label="Address">
                    <Input.TextArea style={{ width: '100%' }} value={attributes['custom:address']} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                    <Button type="default" onClick={onClear} style={{ marginLeft: '10px' }}>
                        Clear
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProfileForm;