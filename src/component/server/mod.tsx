import { Button, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react';
import { DeleteFilled, StopOutlined, CheckOutlined } from '@ant-design/icons';

interface Mod {
  id: string;
  name: string;
  isEnable: Boolean;
}

const initial: Mod[] = [
  { id: '1', name: 'Calamity Mod Music', isEnable: true },
  { id: '2', name: '灾厄Mod-汉化补丁', isEnable: false },
  { id: '3', name: 'AlchemistNPC Lite', isEnable: true },
];

const columns: ColumnsType<Mod> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
    width:'100px'
  },
  {
    title: '模组',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width:'500px'
  },
  {
    title: '状态',
    dataIndex: 'isEnable',
    key: 'isEnable',
    render: holdon,
    width:'200px'
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button shape="circle" icon={<CheckOutlined />} />
        <Button shape="circle" icon={<StopOutlined />} />
        <Button shape="circle" icon={<DeleteFilled />} />
      </Space>
    ),
  },
];

function holdon(text: any): React.ReactNode {
  if (text === true) {
    return <div>已启用</div>;
  }
  return <div>未启用</div>;
}

export default function Mod() {
  const [modList, setModList] = useState(initial);
  return (
    <div style={{ width: '1000px' }}>
      <h2>模组信息：</h2>
      <Table pagination={false} columns={columns} dataSource={modList} />
    </div>
  );
}
