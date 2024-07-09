import React from "react";
import { Layout } from "antd";
import { Helmet } from "react-helmet";

const { Header, Footer, Content } = Layout;
const MainLayout = ({ header, content, footer, title }) => {


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <Layout>
                <Header>
                    {
                        header
                    }
                </Header>
                <Content>
                    {content}
                </Content>
                <Footer>
                    {footer}
                </Footer>

            </Layout>
        </>
    )
};

export default MainLayout;