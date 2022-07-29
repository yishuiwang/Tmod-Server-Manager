import { Input, Space } from 'antd';
import React, { useState } from 'react';
import Mod from './mod';
import Player from './player';
import World from './world';

export default function Server() {
  const [ip, setIp] = useState('192.168.200.1');
  const [num, setNum] = useState('16');
  const [passwrod, setPassword] = useState('sbsz');
  const [port, setPort] = useState('7777');

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
      default:
        console.log('set input value error!');
        break;
    }
  };

  return (
    <div>
      <h2>服务器信息：</h2>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
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
          <Input
            id="passwrod"
            value={passwrod}
            onChange={handleChange}
            style={{ height: '34px', width: '160px', marginLeft: '20px' }}
          ></Input>
        </div>

        <div>
          端口
          <Input
            id="port"
            value={port}
            onChange={handleChange}
            style={{ height: '34px', width: '160px', marginLeft: '20px' }}
          ></Input>
        </div>
      </Space>
    </div>
  );
}
