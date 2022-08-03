import {
  Button,
  Collapse,
  Divider,
  List,
  message,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import React, { useState } from 'react';
import {
  CloseCircleOutlined,
  StopOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
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
];

const initialBan: player[] = [
  { id: '1', nickname: 'sbsz' },
  { id: '2', nickname: 'nmsl' },
];

const boxStyle = {
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '0 0 0 5px rgb(0 0 0 / 13%)',
  marginTop: '20px',
  backgroundColor: 'white',
};
const borderOnline = {
  borderWidth: '3px',
  borderStyle: 'solid',
  borderRadius: '5px',
  borderColor: 'rgb(0 0 0 / 13%)',
  width: '48%',
  display: 'inline-flex',
};
const borderBan = { ...borderOnline, marginLeft: '4%' };

export default function Player() {
  const [palyList, setPalyList] = useState(initialPalyer);
  const [banPlayer, setBanPlayer] = useState(initialBan);
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
      width: '300px',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="删除">
            <Button
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => delBlacklist(record)}
            />
          </Tooltip>
        </Space>
      ),
      width: '150px',
    },
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
      width: '300px',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="踢出服务器">
            <Button
              shape="circle"
              icon={<StopOutlined />}
              onClick={() => kickFormServer(record)}
            />
          </Tooltip>
          <Tooltip title="加入黑名单">
            <Button
              shape="circle"
              icon={
                <CloseCircleOutlined onClick={() => addBlacklist(record)} />
              }
            />
          </Tooltip>
        </Space>
      ),
      width: '150px',
    },
  ];

  function kickFormServer(record: any) {
    if (window.confirm('确定踢出服务器?')) {
      const newList = palyList.filter((Obj) => {
        return Obj.id !== record.id;
      });
      setPalyList(newList);
      message.success('已踢出');
    }
  }

  function addBlacklist(record: any) {
    if (window.confirm('确定加入黑名单?')) {
      let newList = palyList.filter((Obj) => {
        return Obj.id !== record.id;
      });
      setPalyList(newList);
      let banObj = {
        id: String(banPlayer.length + 1),
        nickname: record.nickname,
      };
      let banList = [...banPlayer, banObj];
      setBanPlayer(banList);
      message.success('已加入');
    }
  }

  function delBlacklist(record: any) {
    if (window.confirm('确定从黑名单中删除?')) {
      const newList = banPlayer.filter((Obj) => {
        return Obj.id !== record.id;
      });
      setBanPlayer(newList);
      message.success('已删除');
    }
  }

  return (
    <div style={boxStyle}>
      <h2>玩家信息</h2>

      <div style={borderOnline}>
        <Space direction="vertical">
          <h3
            style={{
              borderBottom: '3px solid rgb(0 0 0 / 13%)',
              height: '60px',
            }}
          >
            当前在线
          </h3>
          <div>
            <Table pagination={false} columns={normal} dataSource={palyList} />
          </div>
        </Space>
      </div>

      <div style={borderBan}>
        <Space direction="vertical">
          <h3
            style={{
              borderBottom: '3px solid rgb(0 0 0 / 13%)',
              height: '60px',
            }}
          >
            黑名单
          </h3>
          <div>
            <Table pagination={false} columns={ban} dataSource={banPlayer} />
          </div>
        </Space>
      </div>
    </div>
  );
}
