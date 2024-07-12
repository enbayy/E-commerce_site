import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Sider } = Layout;

const SiderForm = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const items = [
        {
            key: 'sub1',
            icon: <UserOutlined />,
            label: 'User',
            children: [
                { key: '3', label: 'Tom' },
                { key: '4', label: 'Bill' },
                { key: '5', label: 'Alex' },
            ],
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" items={items} />
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