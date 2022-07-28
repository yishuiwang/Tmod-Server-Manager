import { Breadcrumb, Dropdown, Layout, Menu, MenuProps } from 'antd';
import {
  AppstoreOutlined,
  CloudServerOutlined,
  SettingOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React from 'react';

import '../static/css/AppLayout.css';

interface IProps {}

const items: MenuProps['items'] = [
  {
    label: '服务器管理',
    key: 'mail',
    icon: <CloudServerOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Navigation Three - Submenu',
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
    <Layout className="layout">
      <Header style={{ backgroundColor: 'white' }}>
        <div className="logo" />
        <Menu
          className='Menu'
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items.concat(support)}
        />
      </Header>
    </Layout>
  );
};

export default AppLayout;
