import { Col, Layout, Menu, MenuProps, Row, Space } from 'antd';
import {
  CloudServerOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Content, Header } from 'antd/lib/layout/layout';
import React from 'react';

import '../static/css/AppLayout.css';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: <Link to={'/home'}>服务器管理</Link>,
    key: 'server',
    icon: <CloudServerOutlined />,
  },
];

const support: MenuProps['items'] = [
  {
    className: 'support',
    label: (
      <a
        href="https://github.com/yishuiwang/Tmod-Server-Manager"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    ),
    key: 'github',
    icon: <GithubOutlined style={{ fontSize: '120%' }} />,
  },
];

interface IProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<IProps> = (Props) => {
  return (
    <div>
      <Layout>
        <Header style={{ backgroundColor: 'white' }}>
          <div className="logo" />
          <Menu
            className="Menu"
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items.concat(support)}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Row justify="center" style={{ minHeight: '100vh' }}>
            <Col>
              <Space direction="vertical" size={30}>
                {Props.children}
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default AppLayout;
