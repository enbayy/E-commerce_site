import React, { useState, useEffect } from 'react';
import { fetchUserAttributes, updateUserAttribute, deleteUserAttributes } from 'aws-amplify/auth';
import './../Profile.css';
import { notification } from 'antd';

const UserProfileForm = () => {
    const [attributes, setAttributes] = useState({
        email: '',
        name: '',
        age: '',
        gender: '',
        address: ''
    });

    useEffect(() => {
        const loadUserAttributes = async () => {
            try {
                const userAttributes = await fetchUserAttributes();
                setAttributes({
                    email: userAttributes.email || '',
                    name: userAttributes.name || '',
                    age: userAttributes.age || '',
                    gender: userAttributes.gender || '',
                    address: userAttributes.address || ''
                });
            } catch (error) {
                console.log('Error fetching user attributes:', error);
            }
        };

        loadUserAttributes();
    }, []);

    const handleChange = (e) => {
        setAttributes({
            ...attributes,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdateUserAttribute = async (attributeKey, value) => {
        try {
            const output = await updateUserAttribute({
                userAttribute: {
                    attributeKey,
                    value
                }
            });
            console.log(output);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteUserAttribute = async (attributeKey) => {
        try {
            const output = await deleteUserAttributes({
                userAttributeKeys: [attributeKey]
            });
            console.log(output);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            for (const [attributeKey, value] of Object.entries(attributes)) {
                if (value) {
                    await handleUpdateUserAttribute(attributeKey, value);
                }
            }
            notification.success({
                message: 'Update Successful',
                description: 'User attributes updated successfully!',
                placement: 'topRight',
                duration: 3,
            });
        } catch (error) {
            notification.error({
                message: 'Error updating user attributes',
                description: error.message,
                placement: 'topRight',
                duration: 3,
            });
        }
    };

    const handleClear = async () => {
        try {
            for (const attributeKey of Object.keys(attributes)) {
                await handleDeleteUserAttribute(attributeKey);
            }
            setAttributes({
                email: '',
                name: '',
                age: '',
                gender: '',
                address: ''
            });
            notification.success({
                message: 'Cleaning Successful',
                description: 'User attributes cleared successfully!',
                placement: 'topRight',
                duration: 3,
            });
        } catch (error) {
            console.log('Error clearing user attributes:', error);
        }
    };

    return (
        <div className="profile-page-container">
            <div className="saved-data-container">
                <form className="profile-form" onSubmit={handleSubmit}>
                    <h2>User Profile</h2>
                    <div className="ant-form-item">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={attributes.email}
                            onChange={handleChange}
                            disabled={true}
                        />
                    </div>
                    <div className="ant-form-item">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={attributes.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ant-form-item">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={attributes.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ant-form-item">
                        <label>Gender:</label>
                        <input
                            type="text"
                            name="gender"
                            value={attributes.gender}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="ant-form-item">
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={attributes.address}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Update</button>
                    <button type="button" onClick={handleClear}>Clear</button>
                </form>
            </div>
        </div>
    );
};

export default UserProfileForm;