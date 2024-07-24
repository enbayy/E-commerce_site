import React, { useState } from 'react';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getRoutePath } from '../routing/routes';
import { ROUTES_ID } from '../routing/routes_id';

const { Header, Sider } = Layout;

const SiderForm = ({ userName }) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleUpdatePassword = () => {
        navigate(getRoutePath(ROUTES_ID.updatepassword));
    };

    const handleProfileClick = () => {
        navigate(getRoutePath(ROUTES_ID.profile));
    };

    const items = [
        {
            key: 'sub1',
            icon: <UserOutlined />,
            label: <span onClick={handleProfileClick} style={{ cursor: 'pointer' }}>{userName}</span>,
            children: [
                {
                    key: '1',
                    label: 'Change Password',
                    onClick: handleUpdatePassword,
                }
            ],
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
            </Layout>
        </Layout>
    );
};

export default SiderForm;