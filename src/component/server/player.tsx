import { Collapse, Divider, List, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Table, { ColumnsType } from 'antd/lib/table';
const { Panel } = Collapse;

interface player {
  id: string;
  nickname: string;
}

const initialPalyer: player[] = [
  { id: '1', nickname: 'sz1' },
  { id: '2', nickname: 'sz2' },
  { id: '3', nickname: 'sz3' },
  { id: '3', nickname: 'sz3' },
  { id: '3', nickname: 'sz3' },
  { id: '3', nickname: 'sz3' },
];

const initialBan: player[] = [
  { id: '1', nickname: 'sbsz' },
  { id: '2', nickname: 'nmsl' },
];

const normal: ColumnsType<player> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
    width: '100px',
  },
  {
    title: 'nickname',
    dataIndex: 'nickname',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: '500px',
  },
];

const ban: ColumnsType<player> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
    width: '100px',
  },
  {
    title: 'nickname',
    dataIndex: 'nickname',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: '500px',
  },
];

export default function Player() {
  const [palyList, setPalyList] = useState(initialPalyer);
  const [banPlayer, setBanPlayer] = useState(initialBan);
  return (
    <div>
      <h2>玩家信息</h2>
      <div
        style={{
          width: '480px',
          display: 'inline-flex',
        }}
      >
        <Table pagination={false} columns={normal} dataSource={palyList} />
      </div>
     
      <div
        style={{
          width: '480px',
          marginLeft: '40px',
          display: 'inline-flex',
        }}
      >
        <Table pagination={false} columns={ban} dataSource={banPlayer} />
      </div>
    </div>
  );
}
