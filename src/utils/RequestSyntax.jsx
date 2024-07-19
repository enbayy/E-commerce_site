import React, { useEffect, useState } from 'react';
import { fetchUserAttributes } from './services/cognitoService';

function UserProfile() {
    const [userAttributes, setUserAttributes] = useState([]);

    useEffect(() => {
        async function getUserProfile() {
            try {
                const username = 'username'; // Kullanıcı adını burada belirtin
                const attributes = await fetchUserAttributes(username);
                setUserAttributes(attributes);
                console.log('User attributes:', attributes);
            } catch (error) {
                console.error('Error fetching user attributes:', error);
            }
        }

        getUserProfile();
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <h2>User Attributes</h2>
                <ul>
                    {userAttributes.map((attribute, index) => (
                        <li key={index}>
                            <strong>{attribute.Name}:</strong> {attribute.Value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserProfile;
