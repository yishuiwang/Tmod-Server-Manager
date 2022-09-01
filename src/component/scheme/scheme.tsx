import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Collapse, message, Space } from 'antd';
import { useState } from 'react';
import { BoxStyle } from '../../static/css/board';
import Item from './item';
const { Panel } = Collapse;

export interface TrConf {
  id: string;
  name: string;
  maxnum: string;
  password: string;
  port: string;
  map: string;
  language: string;
  motd: string;
  priority: number;
  ip: string;
  npcstream: number;
  secure: boolean;
  banlist: boolean;
  upnp: boolean;
  steam: boolean;
  lobby: boolean;
  // deleteTodo: (name: string) => void;
  // updateTodo: (name: string, checked: boolean) => void;
}

const initialValue: TrConf = {
  id: '1',
  name: '配置方案一',
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

const initialScheme: TrConf[] = [
  initialValue,
  { ...initialValue, id: '2', name: '配置方案二' },
];

let defaultValue = JSON.parse(JSON.stringify(initialValue));

const style = { ...BoxStyle, minHeight: '543px' };

export default function Scheme() {
  const [confs, setConfs] = useState(initialScheme);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log("isModalVisiblechange");
  //   if(isModalVisible){

  //   }
  // }, [isModalVisible]);

  const getExtra = (conf: TrConf) => {
    return (
      <div>
        <Space>
          <Button
            icon={<SaveOutlined />}
            onClick={(e) => {
              let newConfs = confs.map((obj) => {
                if (obj.id === conf.id) {
                  return conf;
                }
                return obj;
              });
              setConfs(newConfs);
              e.stopPropagation();
              message.success(conf.name + '已保存');
            }}
          >
            save
          </Button>
          <Button
            icon={<UndoOutlined />}
            onClick={(e) => {
              let newConfs = confs.map((obj) => {
                if (obj.id === conf.id) {
                  return { ...defaultValue, id: conf.id };
                }
                return obj;
              });
              setConfs(newConfs);
              e.stopPropagation();
              message.success(conf.name + '已重置');
            }}
          >
            reset
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              if (window.confirm('确定删除?')) {
                let newConfs = confs;
                newConfs = newConfs.filter((obj) => {
                  return obj.id !== conf.id;
                });
                setConfs(newConfs);
              }
              message.success(conf.name + '已删除');
            }}
          >
            delete
          </Button>
        </Space>
      </div>
    );
  };

  function updateConf(conf: TrConf) {
    const newConf = confs.map((obj) => {
      if (obj.id === conf.id) {
        obj = conf;
      }
      return obj;
    });
    setConfs(newConf);
  }

  function addConf() {
    let conf = {
      ...defaultValue,
      name: '默认配置方案' + confs.length,
      id: (confs.length + 1).toString(),
    };
    let newConfs = [...confs, conf];
    setConfs(newConfs);
  }

  // 计算单行文本宽度
  const getTextWidth = (text: string = '', font: string = '12px'): number => {
    if (!text) return 12;
    const dom = document.createElement('span') as HTMLElement;
    dom.style.display = 'inline-block';
    dom.style.fontSize = font;
    dom.style.whiteSpace = 'nowrap';
    dom.textContent = text;
    document.body.appendChild(dom);
    const width = dom.clientWidth;
    document.body.removeChild(dom);
    return width;
  };

  function updateName(e: any, conf: TrConf) {
    e.stopPropagation();
    var tall = prompt('请输入新的名称');
    if (tall !== null) {
      var i;
      for (i in confs) {
        if (confs[i].name === tall) {
          alert('名称重复！');
          return;
        }
      }
      const newConf = confs.map((obj) => {
        if (obj.id === conf.id) {
          obj.name = tall!;
        }
        return obj;
      });
      setConfs(newConf);
    }
    console.log(conf);
  }

  return (
    <div>
      <div style={style}>
        <div style={{ display: 'inline-flex', width: '1200px' }}>
          <h2 style={{ marginBottom: '20px' }}>
            当前共有: {confs.length}个配置方案
          </h2>
          <Button
            style={{ marginLeft: '846px' }}
            size="large"
            onClick={addConf}
          >
            创建新实例
          </Button>
        </div>
        <Collapse defaultActiveKey={confs.length <= 1 ? '' : '1'}>
          {confs.map((conf) => {
            return (
              <Panel
                header={
                  <div
                    style={{
                      width: getTextWidth(conf.name, 'bold 12pt arial') + 60,
                    }}
                    onMouseEnter={() => {
                      document.getElementById('edit' + conf.id)!.style.display =
                        'block';
                    }}
                    onMouseLeave={() => {
                      document.getElementById('edit' + conf.id)!.style.display =
                        'none';
                    }}
                    onClick={(e) => updateName(e, conf)}
                  >
                    <Space>
                      <h3>{conf.name}</h3>
                      <EditOutlined
                        id={'edit' + conf.id}
                        style={{ display: 'none', fontSize: '140%' }}
                      />
                    </Space>
                  </div>
                }
                key={conf.id}
                extra={getExtra(conf)}
              >
                <Item conf={conf} key={conf.id} updateConf={updateConf}></Item>
              </Panel>
            );
          })}
        </Collapse>
      </div>
      <div style={{ minHeight: '150px' }}></div>
    </div>
  );
}
