import { DeleteOutlined, SaveOutlined, UndoOutlined } from '@ant-design/icons';
import {
  Button,
  Collapse,
  Input,
  InputNumber,
  Slider,
  Space,
  Switch,
  TreeSelect,
} from 'antd';
import { TreeNode } from 'antd/lib/tree-select';
import { useState } from 'react';
import { BoxStyle } from '../../static/css/board';

const { Panel } = Collapse;

const initialScheme = {
  maxnum: '16',
  password: 'sbsz',
  port: '7777',
  map: '空岛生存带师',
  language: 'zh-Hans',
  motd: 'welcome to Terraria',
  priority: 1,
  ip: '',
  npcstream: 0,
  banlist: false,
  secure: false,
  upnp: false,
  steam: false,
  lobby: false,
};

const style = { ...BoxStyle, minHeight: '543px' };

export default function Scheme() {
  const [visible, setVisible] = useState(false);
  const [conf, setConf] = useState(initialScheme);

  const getExtra = () => {
    return (
      <div>
        <Space>
          <Button
            icon={<SaveOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              console.log(conf);
            }}
          >
            save
          </Button>
          <Button
            icon={<UndoOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              setConf(initialScheme);
            }}
          >
            reset
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            delete
          </Button>
        </Space>
      </div>
    );
  };

  const generate = () => {
    return <div></div>;
  };

  return (
    <div style={style}>
      <div style={{ display: 'inline-flex', width: '1200px' }}>
        <h2 style={{ marginBottom: '20px' }}>当前共有: 1个配置方案</h2>
        <Button style={{ marginLeft: '846px' }} size="large">
          创建新实例
        </Button>
      </div>
      <Collapse defaultActiveKey={['1']}>
        {generate()}
        <Panel header="configuration one" key="1" extra={getExtra()}>
          <Space direction="vertical" size="small">
            <h2>basic</h2>
            <Space>
              <h3 style={{ width: '100px' }}>Password</h3>
              <Input
                onChange={(event: any) => {
                  setConf({ ...conf, password: event.target.value });
                }}
                value={conf.password}
              ></Input>
            </Space>
            <Space>
              <h3 style={{ width: '100px' }}>Port</h3>
              <Input
                defaultValue={'7777'}
                onChange={(event: any) => {
                  setConf({ ...conf, port: event.target.value });
                }}
                value={conf.port}
              ></Input>
            </Space>
            <Space>
              <h3 style={{ width: '100px' }}>map</h3>
              <TreeSelect
                showSearch
                style={{ width: '182px' }}
                value={conf.map}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={(value: string) => {
                  setConf({ ...conf, map: value });
                }}
              >
                <TreeNode value="parent 1" title="parent 1"></TreeNode>
                <TreeNode value="parent 1-1" title="parent 1-1"></TreeNode>
              </TreeSelect>
            </Space>
            <Space>
              <h3 style={{ width: '100px' }}>language</h3>
              <TreeSelect
                showSearch
                style={{ width: '182px' }}
                value={conf.language}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={(value: string) => {
                  setConf({ ...conf, language: value });
                }}
              >
                <TreeNode value="en-US" title="en-US"></TreeNode>
                <TreeNode value="zh-Hans" title="zh-Hans"></TreeNode>
                <TreeNode value="de-DE" title="parent 1-1"></TreeNode>
                <TreeNode value="it-IT" title="it-IT"></TreeNode>
                <TreeNode value="fr-FR" title="fr-FR"></TreeNode>
                <TreeNode value="es-ES" title="es-ES"></TreeNode>
                <TreeNode value="pt-BR" title="pt-BR"></TreeNode>
                <TreeNode value="pl-PL" title="pl-PL"></TreeNode>
              </TreeSelect>
            </Space>
            <Space>
              <h3 style={{ width: '100px' }}>motd</h3>
              <Input
                value={conf.motd}
                onChange={(event: any) => {
                  setConf({ ...conf, motd: event.target.value });
                }}
              ></Input>
            </Space>
            <Space>
              <h3 style={{ width: '100px' }}>maxplayer</h3>
              <Input
                id="maxnum"
                value={conf.maxnum}
                onChange={(event: any) => {
                  setConf({ ...conf, maxnum: event.target.value });
                }}
              ></Input>
            </Space>
          </Space>
          <Space
            direction="vertical"
            size="small"
            style={{ marginLeft: '60px' }}
          >
            <h2>pro</h2>
            <Space>
              <h3 style={{ width: '100px' }}>npcstream</h3>
              <Slider
                min={0}
                max={60}
                onChange={(value: number) => {
                  setConf({ ...conf, npcstream: value });
                }}
                style={{ width: '120px' }}
                value={typeof conf.npcstream === 'number' ? conf.npcstream : 0}
              />
              <InputNumber
                min={0}
                max={60}
                style={{ margin: '0 16px', width: '60px' }}
                defaultValue={0}
                value={conf.npcstream}
                onChange={(value: number) => {
                  setConf({ ...conf, npcstream: value });
                }}
              ></InputNumber>
            </Space>
            <Space>
              <h3 style={{ width: '100px' }}>priority</h3>
              <Slider
                min={0}
                max={5}
                onChange={(value: number) => {
                  setConf({ ...conf, priority: value });
                }}
                style={{ width: '120px' }}
                value={typeof conf.priority === 'number' ? conf.priority : 0}
              />
              <InputNumber
                min={0}
                max={5}
                style={{ margin: '0 16px', width: '60px' }}
                defaultValue={0}
                value={conf.priority}
                onChange={(value: number) => {
                  setConf({ ...conf, priority: value });
                }}
              ></InputNumber>
            </Space>

            <Space>
              <h3 style={{ width: '100px' }}>listen ip</h3>
              <Input
                onChange={(e: any) => {
                  setConf({ ...conf, ip: e.target.value });
                }}
              ></Input>
            </Space>
            <Space>
              <h3 style={{ width: '60px' }}>steam</h3>
              <Switch
                onChange={(e) => {
                  setConf({ ...conf, steam: e });
                  setVisible(e);
                }}
                checked={conf.steam}
              />
              <h3 style={{ width: '60px', marginLeft: '30px' }}>lobby</h3>
              <Switch
                disabled={!visible}
                onChange={(e) => {
                  setConf({ ...conf, lobby: e });
                }}
                checked={conf.lobby}
              />
            </Space>
            <Space>
              <h3 style={{ width: '60px' }}>upnp</h3>
              <Switch
                onChange={(e) => {
                  setConf({ ...conf, upnp: e });
                }}
                checked={conf.upnp}
              />
              <h3 style={{ width: '60px', marginLeft: '30px' }}>banlist</h3>
              <Switch
                onChange={(e) => {
                  setConf({ ...conf, banlist: e });
                }}
                checked={conf.banlist}
              />
            </Space>
            <Space>
              <h3 style={{ width: '60px' }}>secure</h3>
              <Switch
                onChange={(e) => {
                  setConf({ ...conf, secure: e });
                }}
                checked={conf.secure}
              />
            </Space>
          </Space>
        </Panel>
      </Collapse>
    </div>
  );
}
