import { Button, Input, message, Space, Tooltip } from 'antd';
import React, { useState } from 'react';
import { EditOutlined, StopOutlined, CheckOutlined } from '@ant-design/icons';

const boxStyle = {
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '0 0 0 5px rgb(0 0 0 / 13%)',
  marginTop: '40px',
  backgroundColor: 'white',
};
const border = {
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: 'rgb(0 0 0 / 13%)',
  padding: '20px',
};
const initialServer = {
  ip: '192.168.200.1',
  num: '16',
  passwrod: 'sbsz',
  port: '7777',
  name: '空岛生存带师',
  seed: '3.3.2.1964603061',
  serverVersion: 'tModLoader v2022.6.96.4',
  clientVersion: 'Terraria Server v1.4.3.6',
  time: '8:03 PM',
};

export default function Server() {
  const [server, setServer] = useState(initialServer);

  const handleChange = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;
    console.log(id, value);
    setServer({
      ...server,
      [id]: value,
    });
    console.log(server);
  };

  const setTime = (event: any) => {
    const id = event.target.id;
    let newServer = server;
    switch (id) {
      case 'dawn':
        newServer.time = '4:30 AM';
        break;
      case 'noon':
        newServer.time = '12:00 PM';
        break;
      case 'dusk':
        newServer.time = '7:30 PM';
        break;
      case 'midnight':
        newServer.time = '12:00 AM';
        break;
      default:
        console.log('wrong time!');
    }
    handleChange(event);
    message.success('设置成功');
  };

  const restart = () => {
    message.success('重启服务器成功');
  };
  const stop = () => {
    message.success('关闭服务器成功');
  };
  const start = () => {
    message.success('开启服务器');
  };

  return (
    <div style={boxStyle}>
      <h2>服务器信息：</h2>
      <div style={border}>
        <div style={{ display: 'inline-flex', width: '33%' }}>
          <Space direction="vertical" size="small">
            <Space>
              <h3>ip地址</h3>
              <Input id="ip" value={server.ip} onChange={handleChange}></Input>
            </Space>
            <Space size={22}>
              <h3>在线</h3>
              <Input
                id="num"
                value={server.num}
                onChange={handleChange}
              ></Input>
            </Space>
            <Space size={22}>
              <h3>密码</h3>
              <Input
                id="passwrod"
                value={server.passwrod}
                onChange={handleChange}
              ></Input>
            </Space>
            <Space size={22}>
              <h3>端口</h3>
              <Input
                id="port"
                value={server.port}
                onChange={handleChange}
              ></Input>
            </Space>
            <Space size={22}>
              <h3>地图</h3>
              <Input
                id="name"
                value={server.name}
                onChange={handleChange}
              ></Input>
            </Space>
            <Space size={22}>
              <h3>种子</h3>
              <Input
                id="seed"
                value={server.seed}
                onChange={handleChange}
              ></Input>
            </Space>
          </Space>
        </div>
        <div style={{ display: 'inline-flex', width: '33%' }}>
          <Space direction="vertical" size="small">
            <Space>
              <h3>时间</h3>
              <Input
                id="time"
                value={server.time}
                onChange={handleChange}
              ></Input>
            </Space>
            <Tooltip title="设置时间">
              <Button id="dawn" style={{ width: '100%' }} onClick={setTime}>
                黎明
              </Button>
            </Tooltip>
            <Button id="noon" style={{ width: '100%' }} onClick={setTime}>
              正午
            </Button>
            <Button id="dusk" style={{ width: '100%' }} onClick={setTime}>
              黄昏
            </Button>
            <Button id="midnight" style={{ width: '100%' }} onClick={setTime}>
              午夜
            </Button>
          </Space>
        </div>
        <div style={{ display: 'inline-flex', width: '33%' }}>
          <Space direction="vertical" size="small">
            <Space>
              <h3>服务器版本</h3>
              <Input
                id="version"
                value={server.serverVersion}
                onChange={handleChange}
              ></Input>
            </Space>
            <Space>
              <h3>客户端版本</h3>
              <Input
                id="version"
                value={server.clientVersion}
                onChange={handleChange}
              ></Input>
            </Space>
            <Button id="restart" style={{ width: '100%' }} onClick={restart}>
              重启
            </Button>
            <Button id="stop" style={{ width: '100%' }} onClick={stop}>
              关服
            </Button>
            <Button id="start" style={{ width: '100%' }} onClick={start}>
              开服
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
}
