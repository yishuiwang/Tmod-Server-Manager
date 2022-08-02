import {
  Breadcrumb,
  Col,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
} from 'antd';
import {
  AppstoreOutlined,
  CloudServerOutlined,
  SettingOutlined,
  GithubOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React from 'react';

import '../static/css/AppLayout.css';
import Server from './server/server';
import File from './file/file';
import Player from './server/player';
import Mod from './server/mod';
import { Link } from 'react-router-dom';
import Test from './server/test';

interface IProps {}

const items: MenuProps['items'] = [
  {
    label: <Link to={'/home'}>服务器管理</Link>,
    key: 'server',
    icon: <CloudServerOutlined />,
  },
  {
    label: <Link to={'/ssh'}>SSH</Link>,
    key: 'ssh',
    icon: <CodeOutlined />,
  },
  {
    label: '还没想好些什么',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
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
    icon: <GithubOutlined />,
  },
];

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
                <Server></Server>
                <Mod></Mod>
                <Player></Player>
                <File></File>
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default AppLayout;
