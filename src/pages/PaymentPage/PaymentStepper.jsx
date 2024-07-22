import React, { useState } from 'react';
import { Steps } from 'antd';
import AddressForm from './AddressForm';
import ProductDetails from './ProductDetails';
import PaymentInfo from './PaymentInfo';
import PaymentSuccessfully from './PaymentSuccessfully';
import { useLocation } from 'react-router-dom';
import { getRouteTitle } from '../../routing/routes';
import "./PaymentStepper.css";

function PaymentStepper() {
    const [current, setCurrent] = useState(0);
    const [addressDetails, setAddressDetails] = useState(null);
    const [productDetails, setProductDetails] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState(null);

    const onFinishProductForm = (values) => {
        setProductDetails(values);
        setCurrent(1);
    };

    const onFinishAddressForm = (values) => {
        setAddressDetails(values);
        setCurrent(2);
    };

    const onFinishPaymentForm = (values) => {
        console.log('Ödeme Bilgileri:', values);
        setCurrent(3);
    };

    const forms = [
        <ProductDetails onFinish={onFinishProductForm} initialValues={productDetails} />,
        <AddressForm onFinish={onFinishAddressForm} initialValues={addressDetails} />,
        <PaymentInfo onFinish={onFinishPaymentForm} />,
        <PaymentSuccessfully />
    ];

    const isStepDisabled = (stepNumber) => {
        if (stepNumber === 0) return false;
        if (stepNumber === 1) return productDetails === null;
        if (stepNumber === 2) return addressDetails === null || paymentInfo === null;
        return false;
    };

    const location = useLocation();
    const title = getRouteTitle(location.pathname);

    return (
        <div className="payment-stepper-container">
            <div className="payment-stepper-content">
                <div className="steps-container">
                    <Steps current={current}>
                        <Steps.Step title="Product" disabled={isStepDisabled(0)} />
                        <Steps.Step title="Address" disabled={isStepDisabled(1)} />
                        <Steps.Step title="Payment" disabled={isStepDisabled(2)} />
                        <Steps.Step title="Successfully" disabled={isStepDisabled(3)} />
                    </Steps>
                </div>
                <div className="payment-stepper-form">
                    {forms[current]}
                </div>
            </div>
        </div>
    );
}

export default PaymentStepper;