import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

function PaymentSuccessfully() {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center" }}>
            <h3>Your payment has been made successfully.</h3>
            <Button onClick={handleGoHome}>
                Go Home
            </Button>
        </div>
    );
}

export default PaymentSuccessfully;