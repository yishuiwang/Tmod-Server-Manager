import { Button, Modal, Radio, Space } from 'antd';
import { useState } from 'react';

interface IProps {
  startGame: (action: boolean) => void;
  confs: { id: Number; name: String }[];
}
const Finished: React.FC<IProps> = (Props) => {
  //对话框是否可见
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    Props.startGame(true);
    // setStarted(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const startServer = (event: any) => {
    console.log('server start');
    //id
    console.log(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          // display: started ? 'none' : 'block',
        }}
      >
        <h2>当前没有启动实例</h2>
        <h3>你可以手动创建配置方案，或者上传自定义配置方案</h3>
        <Space>
          <Button size="large">创建一个新实例</Button>
          <Button size="large" onClick={showModal}>
            从现有实例启动
          </Button>
        </Space>
        <br></br>
        <Button
          type="link"
          href="https://terraria.wiki.gg/zh/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8#%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%96%87%E4%BB%B6"
          target="_blank"
        >
          详细配置方案信息请参考wiki
        </Button>
        <Modal
          title="选择配置方案"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
        >
          <Radio.Group>
            <Space direction="vertical">
              {Props.confs.map((obj) => {
                return (
                  <Radio
                    onClick={startServer}
                    value={obj.id}
                    key={'sbsz' + obj.name}
                  >
                    {obj.name}
                  </Radio>
                );
              })}
            </Space>
          </Radio.Group>
        </Modal>
      </div>
    </div>
  );
};

export default Finished;
