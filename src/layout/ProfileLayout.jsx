import React from "react";
import { Layout } from "antd";
import { Helmet } from "react-helmet";

const { Header, Footer, Content } = Layout;

const ProfileLayout = ({ header, content, footer, title }) => {
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

export default ProfileLayout