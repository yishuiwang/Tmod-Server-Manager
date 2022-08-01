import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';
import { EditOutlined, StopOutlined, CheckOutlined } from '@ant-design/icons';

export default function Server() {
  const initialServer = {
    ip: '192.168.200.1',
    num: '16',
    passwrod: 'sbsz',
    port: '7777',
    name: '空岛生存带师',
    seed: '3.3.2.1964603061',
  };
  const [server, setServer] = useState(initialServer);

  const handleChange = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;
    console.log(id, value);
    setServer({
      ...server,
      [id]: value,
    });
  };

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
    padding: '20px',
  };

  return (
    <div style={boxStyle}>
      <h2>服务器信息：</h2>
      <div style={border}>
        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
          <div>
            IP地址
            <Input
              id="ip"
              value={server.ip}
              onChange={handleChange}
              style={{ height: '34px', width: '160px', marginLeft: '10px' }}
            ></Input>
          </div>
          <div>
            在线
            <Input
              id="num"
              value={server.num}
              onChange={handleChange}
              style={{ height: '34px', width: '160px', marginLeft: '20px' }}
            ></Input>
          </div>
          <div>
            密码
            <Input
              id="passwrod"
              value={server.passwrod}
              onChange={handleChange}
              style={{ height: '34px', width: '160px', marginLeft: '20px' }}
            ></Input>
          </div>
          <div>
            端口
            <Input
              id="port"
              value={server.port}
              onChange={handleChange}
              style={{ height: '34px', width: '160px', marginLeft: '20px' }}
            ></Input>
          </div>
          <div>
            地图
            <Input
              id="name"
              value={server.name}
              onChange={handleChange}
              style={{ height: '34px', width: '160px', marginLeft: '20px' }}
            ></Input>
          </div>
          <div>
            种子
            <Input
              id="seed"
              value={server.seed}
              onChange={handleChange}
              style={{ height: '34px', width: '160px', marginLeft: '20px' }}
            ></Input>
          </div>
        </Space>
      </div>
    </div>
  );
}
