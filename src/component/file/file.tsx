import { Button, message, Upload, UploadProps } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import React from 'react';

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
  return (
    <div>
      <h2>File</h2>
      <Upload {...props}>
        <Button shape="circle" icon={<UploadOutlined />}>
        </Button>
      </Upload>
      <Upload {...props}>
        <Button shape="circle" icon={<UploadOutlined />}>
        </Button>
      </Upload>
      <Button shape="circle" icon={<DownloadOutlined />}>
      </Button>
    </div>
  );
}
