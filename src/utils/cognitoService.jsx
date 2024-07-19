// src/services/cognitoService.js

const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1', // Cognito'nun bulunduğu bölgeyi belirtin
});

const cognitoIdentity = new AWS.CognitoIdentityServiceProvider();

async function fetchUserAttributes(username) {
    const params = {
        UserPoolId: 'us-east-1_FuyT0ZkXE', // Cognito User Pool ID
        Username: username // Kullanıcının kullanıcı adı veya altında başka bir bilgi olabilir
    };

    try {
        const data = await cognitoIdentity.adminGetUser(params).promise();
        console.log('User attributes:', data.UserAttributes);
        return data.UserAttributes;
    } catch (error) {
        console.error('Error fetching user attributes:', error);
        throw error;
    }
}

async function updateUserAttributes(username, attributeName, attributeValue) {
    const params = {
        UserPoolId: 'us-east-1_FuyT0ZkXE', // Cognito User Pool ID
        Username: username, // Kullanıcının kullanıcı adı veya altında başka bir bilgi olabilir
        UserAttributes: [
            {
                Name: Name,
                Value: String,
            },
            {
                Name: Age,
                Value: Number,
            },
            {
                Name: Gender,
                Value: String,
            },
            {
                Name: Address,
                Value: String,
            }
        ]
    };

    try {
        const data = await cognitoIdentity.adminUpdateUserAttributes(params).promise();
        console.log('Attributes updated successfully:', data);
        return data;
    } catch (error) {
        console.error('Error updating user attributes:', error);
        throw error;
    }
}

module.exports = {
    fetchUserAttributes,
    updateUserAttributes
};
