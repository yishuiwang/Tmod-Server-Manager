import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

const LoginForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const FormView = (
    <Form
      initialValues={{ username: '', password: '' }}
      name="login-form"
      onFinish={onFinish}
      style={{ width: '368px', margin: '0 auto', zIndex: 2 }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="用户名" prefix={<UserOutlined />} size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password
          placeholder="密码"
          prefix={<LockOutlined />}
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          size="large"
          type="primary"
          style={{ width: '100%' }}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <div
      style={{
        backgroundImage: 'url(' + require('../../static/img/dNMT4z.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col>
          <div
            style={{
              width: '500px',
              height: '260px',
              backgroundColor: '#00000060',
              textAlign: 'center',
              padding: '15px',
            }}
          >
            <span
              style={{
                color: 'rgb(119, 119, 124)',
                fontSize: 26,
                fontWeight: 600,
                display: 'inline-block',
                margin: 'auto',
                marginBottom: 10,
              }}
            >
              Tmod Server Manager
            </span>
            {FormView}
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default LoginForm;
