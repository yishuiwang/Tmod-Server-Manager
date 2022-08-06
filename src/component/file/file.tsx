import { Button, Input, message, Space, Upload } from 'antd';
import {
  UploadOutlined,
  DownloadOutlined,
  InboxOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons';


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
  height: '150px',
  display: 'inline-flex',
  background: 'white',
  width: '48%',
  padding: '10px',
};
const borderMap = { ...borderMod, marginLeft: '4%' };

export default function File() {
  function upload() {
    message.success('sbsz')
  }

  return (
    <div style={boxStyle}>
      <h2>File</h2>
      <div style={borderMod}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <h3>Mod</h3>
          <Space size={0}>
            <Input
              style={{ height: '40px', width: '101%' }}
              placeholder="Mod..."
              prefix={<CloudUploadOutlined />}
              onClick={upload}
            />
            <Button
              style={{ width: '100%', height: '40px', marginLeft: '20%' }}
            >
              上传Mod
            </Button>
          </Space>
        </Space>
      </div>

      <div style={borderMap}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <h3>地图</h3>
          <Space size={30}>
            <Space>
              <Upload>
                <Input
                  style={{ height: '40px' }}
                  placeholder="Mod..."
                  prefix={<CloudUploadOutlined />}
                />
              </Upload>
              <Button style={{ height: '40px' }}>上传地图</Button>
            </Space>
            <Button style={{ height: '40px', width: '150px' }}>下载地图</Button>
          </Space>
        </Space>
      </div>
    </div>
  );
}
