import React from "react";
import { Layout } from "antd";
import { Helmet } from "react-helmet";
import Sider from "antd/es/layout/Sider";

const { Header, Footer, Content } = Layout;

const PrivateLayout = ({ header, content, footer, title, sider }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <Layout className="layout">
                <Header style={{ backgroundColor: header ? 'yourColor' : 'transparent' }}>
                    {header}
                </Header>
                <Layout>
                    <Sider>
                        {sider}
                    </Sider>
                    <Content className="layout">
                        {content}
                    </Content>
                </Layout>
                <Footer>
                    {footer}
                </Footer>
            </Layout>
        </>
    )
};

export default PrivateLayout;
