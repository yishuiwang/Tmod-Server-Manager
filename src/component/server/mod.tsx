import { Button, message, Popconfirm, Space, Tooltip } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react';
import {
  DeleteFilled,
  StopOutlined,
  CheckOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { act } from 'react-dom/test-utils';

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
  borderColor: 'rgb(0 0 0 / 13%)',
};

export default function Mod() {
  const [modList, setModList] = useState(initial);
  const columns: ColumnsType<Mod> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: '001modid',
      render: (text) => <a>{text}</a>,
      width: '100px',
    },
    {
      title: '模组',
      dataIndex: 'name',
      key: '001modmod',
      render: (text) => <a>{text}</a>,
      width: '500px',
    },
    {
      title: '状态',
      dataIndex: 'isEnable',
      key: '001modisEnable',
      render: holdon,
      width: '200px',
    },
    {
      title: 'Action',
      key: '001modaction',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="启用">
            <Button
              shape="circle"
              icon={<CheckOutlined />}
              onClick={() => enableMod(record)}
            />
          </Tooltip>
          <Tooltip title="禁用">
            <Button
              shape="circle"
              icon={<StopOutlined />}
              onClick={() => disableMod(record)}
            />
          </Tooltip>
          <Tooltip title="删除">
            <Button
              shape="circle"
              icon={<DeleteFilled />}
              onClick={() => deleteMod(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  function enableMod(record: any) {
    const newlist = modList.map((m) => {
      if (m.id === record.id) {
        return { ...m, isEnable: true };
      }
      return m;
    });
    setModList(newlist);
    message.success('Mod已启用');
  }

  function disableMod(record: any) {
    const newList = modList.map((m) => {
      if (m.id === record.id) {
        return { ...m, isEnable: false };
      }
      return m;
    });
    setModList(newList);
    message.success('Mod已禁用');
  }

  function deleteMod(record: any) {
    if (window.confirm('确定删除?')) {
      const newList = modList.filter((modObj) => {
        return modObj.id !== record.id;
      });
      setModList(newList);
      message.success('Mod已删除');
    }
  }

  function holdon(text: any): React.ReactNode {
    if (text === true) {
      return <div>已启用</div>;
    }
    return <div>未启用</div>;
  }

  return (
    <div style={boxStyle}>
      <h2>模组信息：</h2>
      <Table
        pagination={false}
        columns={columns}
        dataSource={modList}
        style={border}
        rowKey={(record) => record.id}
      />
    </div>
  );
}
