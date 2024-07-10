import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
const { Paragraph, Text } = Typography;
import React from 'react'

export class ErrorBoundaryPage extends React.Component {
    state = { error: false, errorMsg: "", errorStack: "" };

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error) {
        // Log or store the error
        this.setState({ errorMsg: error.message, errorStack: error.stack });
    }

    render() {
        return this.state.error ? (
            <div>
                <Result
                    status="error"
                    title="Submission Failed"
                    subTitle="Please check and modify the following information before resubmitting."
                    extra={[
                        <Button type="primary" key="console">
                            Go Console
                        </Button>,
                        <Button key="buy">Buy Again</Button>,
                    ]}
                >
                    <div className="desc">
                        <Paragraph>
                            <Text
                                strong
                                style={{
                                    fontSize: 16,
                                }}
                            >
                                The content you submitted has the following error:
                            </Text>
                        </Paragraph>
                        <Paragraph>
                            <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
                            frozen. Thaw immediately.
                        </Paragraph>
                        <Paragraph>
                            <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
                            eligible to apply. Apply Unlock.
                        </Paragraph>
                    </div>
                </Result>
            </div>
        ) : (
            <>{this.props.children}</>
        );
    }
}