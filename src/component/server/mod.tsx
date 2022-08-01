import { Button, message, Popconfirm, Space, Tooltip } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react';
import {
  DeleteFilled,
  StopOutlined,
  CheckOutlined,
  WarningOutlined,
} from '@ant-design/icons';

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
    width: '100px',
  },
  {
    title: '模组',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: '500px',
  },
  {
    title: '状态',
    dataIndex: 'isEnable',
    key: 'isEnable',
    render: holdon,
    width: '200px',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Tooltip title="启用">
          <Button shape="circle" icon={<CheckOutlined />} onClick={enableMod} />
        </Tooltip>
        <Tooltip title="禁用">
          <Button shape="circle" icon={<StopOutlined />} onClick={disableMod} />
        </Tooltip>
        <Tooltip title="删除">
          <Button shape="circle" icon={<DeleteFilled />} onClick={deleteMod} />
        </Tooltip>
      </Space>
    ),
  },
];

const enableMod = () => {
  message.success('Mod已启用');
};

const disableMod = () => {
  message.success('Mod已禁用');
};

const deleteMod = () => {
  if (window.confirm('确定删除?')) {
    message.success('Mod已删除');
  }
};

function holdon(text: any): React.ReactNode {
  if (text === true) {
    return <div>已启用</div>;
  }
  return <div>未启用</div>;
}

export default function Mod() {
  const [modList, setModList] = useState(initial);
  const boxStyle = {
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 0 5px rgb(0 0 0 / 13%)',
    marginTop: '20px',
    backgroundColor: 'white',
  };
  const border = {
    borderWidth: '3px',
    borderStyle: 'solid',
    borderRadius: '5px',
    borderColor: 'rgb(0 0 0 / 13%)',
  };

  return (
    <div style={boxStyle}>
      <h2>模组信息：</h2>
      <Table
        pagination={false}
        columns={columns}
        dataSource={modList}
        style={border}
      />
    </div>
  );
}
