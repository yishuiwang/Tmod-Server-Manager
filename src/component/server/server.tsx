import { Button, Input, Space } from 'antd';
import React, { useState } from 'react';
import { EditOutlined, StopOutlined, CheckOutlined } from '@ant-design/icons';

export default function Server() {
  const [ip, setIp] = useState('192.168.200.1');
  const [num, setNum] = useState('16');
  const [passwrod, setPassword] = useState('sbsz');
  const [port, setPort] = useState('7777');
  const [name, setName] = useState('空岛生存带师');
  const [seed, setSeed] = useState('3.3.2.1964603061');

  const handleChange = (event: any) => {
    const id = event.currentTarget.getAttribute('id');
    const value = event.target.value;
    switch (id) {
      case 'ip':
        setIp(value);
        break;
      case 'num':
        setNum(value);
        break;
      case 'passwrod':
        setPassword(value);
        break;
      case 'port':
        setPort(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'seed':
        setSeed(value);
        break;
      default:
        console.log('set input value error!');
        break;
    }
  };

  return (
    <div style={{ width: '1000px', backgroundColor: 'white' }}>
      <h2>服务器信息：</h2>
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <div>
          IP地址
          <Input
            id="ip"
            value={ip}
            onChange={handleChange}
            style={{ height: '34px', width: '160px', marginLeft: '10px' }}
          ></Input>
        </div>
        <div>
          在线
          <Input
            id="num"
            value={num}
            onChange={handleChange}
            style={{ height: '34px', width: '160px', marginLeft: '20px' }}
          ></Input>
        </div>
        <div>
          密码
          <Space size="large">
            <Input
              id="passwrod"
              value={passwrod}
              onChange={handleChange}
              style={{ height: '34px', width: '160px', marginLeft: '20px' }}
            ></Input>
          </Space>
        </div>
        <div>
          端口
          <Space size="large">
            <Input
              id="port"
              value={port}
              onChange={handleChange}
              style={{ height: '34px', width: '160px', marginLeft: '20px' }}
            ></Input>
          </Space>
        </div>
        <div>
          地图
          <Input
            id="name"
            value={name}
            onChange={handleChange}
            style={{ height: '34px', width: '160px', marginLeft: '20px' }}
          ></Input>
        </div>
        <div>
          种子
          <Input
            id="seed"
            value={seed}
            onChange={handleChange}
            style={{ height: '34px', width: '160px', marginLeft: '20px' }}
          ></Input>
        </div>
      </Space>
    </div>
  );
}
