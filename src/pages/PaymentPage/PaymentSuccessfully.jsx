import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

function PaymentSuccessfully() {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div>
            <h2>Successfully Completed!</h2>
            <p>Your payment has been made successfully.</p>
            <Button onClick={handleGoHome}>
                Go Home
            </Button>
        </div>
    );
}

export default PaymentSuccessfully;