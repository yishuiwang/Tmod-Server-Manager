import { SaveOutlined, UndoOutlined } from "@ant-design/icons";
import {
  Button,
  Collapse,
  Input,
  InputNumber,
  Slider,
  Space,
  Switch,
  TreeSelect,
} from "antd";
import { TreeNode } from "antd/lib/tree-select";
import { useState } from "react";
import { BoxStyle } from "../../static/css/board";

const { Panel } = Collapse;

const initialScheme = {
  maxnum: "16",
  password: "sbsz",
  port: "7777",
  map: "空岛生存带师",
  language: "zh-Hans",
  motd: "welcome to Terraria",
};

export default function Scheme() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [conf, setConf] = useState(initialScheme);
  const [npcstream, setNpcstream] = useState(0);
  const [priority, setPriority] = useState(1);
  const [ip, setIp] = useState("");
  const changeIp = (event: any) => {
    const value = event.target.value;
    setIp(value);
  };
  const changeProprity = (newValue: number) => {
    setPriority(newValue);
  };

  const changeNpcstream = (newValue: number) => {
    setNpcstream(newValue);
  };

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleChange = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;
    setConf({
      ...conf,
      [id]: value,
    });
  };

  return (
    <div style={BoxStyle}>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="configuration one" key="1">
          <Space direction="vertical" size="small">
            <h2>basic</h2>
            <Space>
              <h3 style={{ width: "100px" }}>Password</h3>
              <Input
                id="password"
                onChange={handleChange}
                value={conf.password}
              ></Input>
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>Port</h3>
              <Input
                id="port"
                defaultValue={"7777"}
                onChange={handleChange}
                value={conf.port}
              ></Input>
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>map</h3>
              <TreeSelect
                showSearch
                style={{ width: "205px" }}
                value={conf.map}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}
              >
                <TreeNode value="parent 1" title="parent 1"></TreeNode>
                <TreeNode value="parent 1-1" title="parent 1-1"></TreeNode>
              </TreeSelect>
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>language</h3>
              <TreeSelect
                showSearch
                style={{ width: "205px" }}
                value={conf.language}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}
              >
                <TreeNode value="parent 1" title="parent 1"></TreeNode>
                <TreeNode value="parent 1-1" title="parent 1-1"></TreeNode>
              </TreeSelect>
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>motd</h3>
              <Input
                id="motd"
                value={conf.motd}
                onChange={handleChange}
              ></Input>
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>maxplayer</h3>
              <Input
                id="maxnum"
                value={conf.maxnum}
                onChange={handleChange}
              ></Input>
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>banlist</h3>
              <Switch defaultChecked />
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>secure</h3>
              <Switch defaultChecked />
            </Space>
          </Space>
          <Space
            direction="vertical"
            size="small"
            style={{ marginLeft: "60px" }}
          >
            <h2>pro</h2>
            <Space>
              <h3 style={{ width: "100px" }}>npcstream</h3>
              <Slider
                min={0}
                max={60}
                onChange={changeNpcstream}
                style={{ width: "120px" }}
                value={typeof npcstream === "number" ? npcstream : 0}
              />
              <InputNumber
                min={0}
                max={60}
                style={{ margin: "0 16px", width: "60px" }}
                defaultValue={0}
                value={npcstream}
                onChange={changeNpcstream}
              ></InputNumber>
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>priority</h3>
              <Slider
                min={0}
                max={5}
                onChange={changeProprity}
                style={{ width: "120px" }}
                value={typeof priority === "number" ? priority : 0}
              />
              <InputNumber
                min={0}
                max={5}
                style={{ margin: "0 16px", width: "60px" }}
                defaultValue={0}
                value={priority}
                onChange={changeProprity}
              ></InputNumber>
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>listen ip</h3>
              <Input onChange={changeIp}></Input>
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>upnp</h3>
              <Switch defaultChecked />
            </Space>
            <Space>
              <h3 style={{ width: "100px" }}>steam</h3>
              <Switch defaultChecked />
            </Space>
          </Space>
          <Space
            direction="vertical"
            size="small"
            style={{ marginLeft: "60px" }}
          >
            <h2>action</h2>
            <Button type="primary" size="large" icon={<SaveOutlined />}>
              save
            </Button>
            <Button type="primary" size="large" icon={<UndoOutlined />}>
              reset
            </Button>
          </Space>
        </Panel>
      </Collapse>
    </div>
  );
}
