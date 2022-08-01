import { Button, Input, message, Space, Upload, UploadProps } from 'antd';
import {
  UploadOutlined,
  DownloadOutlined,
  InboxOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons';
import React from 'react';
import Dragger from 'antd/lib/upload/Dragger';

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function File() {
  const boxStyle = {
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 0 5px rgb(0 0 0 / 13%)',
    marginTop: '20px',
    backgroundColor: 'white',
    marginBottom: '100px',
  };

  const borderMod = {
    borderWidth: '3px',
    borderStyle: 'solid',
    borderRadius: '5px',
    borderColor: 'rgb(0 0 0 / 13%)',
    height: '200px',
    display: 'inline-flex',
    background: 'white',
    width: '48%',
    padding: '10px',
  };

  const borderMap = { ...borderMod, marginLeft: '4%' };

  return (
    <div style={boxStyle}>
      <h2>File</h2>
      <div style={borderMod}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <h3>Mod</h3>
          <Upload style={{ marginLeft: '0px' }}>
            <Space size="middle">
              <Input
                style={{ height: '40px' }}
                placeholder="Mod..."
                prefix={<CloudUploadOutlined />}
              />
              <Button style={{ height: '40px' }}>上传Mod</Button>
            </Space>
          </Upload>
          <br></br>
          <Button>下载Mod</Button>
        </Space>
      </div>

      <div style={borderMap}>
        <Space direction="vertical">
          <h3>地图</h3>
          <Upload style={{ marginLeft: '0px' }}>
            <Space size="middle">
              <Input
                style={{ height: '40px' }}
                placeholder="World..."
                prefix={<CloudUploadOutlined />}
              />
              <Button style={{ height: '40px' }}>上传地图</Button>
            </Space>
          </Upload>
          <br></br>
          <Button>下载地图</Button>
        </Space>
      </div>
    </div>
  );
}
