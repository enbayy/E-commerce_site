import React from 'react';
import MainLayout from "../../layout/MainLayoutPage/MainLayout"
import Navbar from '../../components/navbar';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getRoutePath } from '../../routing/routes';

const NotFoundContainer = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/")
    }

    return (
        <div>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button onClick={handleNavigate} type="primary">Back Home</Button>}
            />
        </div>
    )
}

function NotFound() {
    return (
        <MainLayout content={<NotFoundContainer />} header={<Navbar />} title={"Not Found Page"} />
    )
}

export default NotFound;