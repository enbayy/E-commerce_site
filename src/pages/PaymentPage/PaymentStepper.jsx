import React, { useState } from 'react';
import { Steps } from 'antd';
import AddressForm from './AddressForm';
import PaymentInfo from './PaymentInfo';
import PaymentSuccessfully from './PaymentSuccessfully';
import { useLocation } from 'react-router-dom';
import { getRouteTitle } from '../../routing/routes';
import "./PaymentStepper.css";
import ProductDetails from './ProductDetails';

function PaymentStepper() {
    const [current, setCurrent] = useState(0);
    const [addressDetails, setAddressDetails] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState(null);

    const onFinishAddressForm = (values) => {
        setAddressDetails(values);
        setCurrent(1);
    };

    const onFinishPaymentForm = (values) => {
        console.log('Ödeme Bilgileri:', values);
        setCurrent(2);
    };

    const forms = [
        <AddressForm onFinish={onFinishAddressForm} initialValues={addressDetails} />,
        <PaymentInfo onFinish={onFinishPaymentForm} />,
        <PaymentSuccessfully />
    ];

    const isStepDisabled = (stepNumber) => {
        if (stepNumber === 0) return false;
        if (stepNumber === 1) return addressDetails === null;
        if (stepNumber === 2) return addressDetails === null || paymentInfo === null;
        return false;
    };

    const location = useLocation();
    const title = getRouteTitle(location.pathname);

    return (
        <div className="payment-stepper-container">
            <div className='payment-stepper-unified'>
                <div className="payment-stepper-content">
                    <div className="steps-container">
                        <Steps current={current} direction="horizontal">
                            <Steps.Step title="Address" disabled={isStepDisabled(0)} />
                            <Steps.Step title="Payment" disabled={isStepDisabled(1)} />
                            <Steps.Step title="Successfully" disabled={isStepDisabled(2)} />
                        </Steps>
                    </div>
                    <div className="payment-stepper-form">
                        {forms[current]}
                    </div>
                </div>

                <div className="payment-stepper-sidebar">
                    <ProductDetails />
                </div>
            </div>
        </div>
    );
}

export default PaymentStepper;
