import {
  Button,
  Input,
  InputNumber,
  Modal,
  Slider,
  Space,
  Switch,
  TreeSelect,
} from "antd";
import { TreeNode } from "antd/lib/tree-select";
import React, { useState } from "react";
import { TrConf } from "./scheme";

interface Ipropos {
  conf: TrConf;
  updateConf: (conf: TrConf) => void;
}

interface mapConf {
  name: string;
  seed?: string;
  difficult: string;
  size: string;
}

const initialMap: mapConf = {
  name: "默认地图",
  difficult: "Journey",
  size: "Large",
};

const Item: React.FC<Ipropos> = (Props) => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [map, setMap] = useState(initialMap);
  const [worlds, setWorlds] = useState(["map1", "map2"]);
  let { conf } = Props;

  function addMap() {
    // showModal();
  }

  const showModal = (e: any) => {
    e.stopPropagation();
    setIsModalVisible(true);
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
          let newWorlds = worlds;
          newWorlds.push(map.name);
          setWorlds(newWorlds);
          conf.map = map.name;
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        closable={false}
      >
        <Space>
          <h3 style={{ width: "100px" }}>world name</h3>
          <Input
            onChange={(event: any) => {
              let newMap = { ...map, name: event.target.value };
              setMap(newMap);
            }}
          ></Input>
        </Space>
        <Space>
          <h3 style={{ width: "100px" }}>world seed</h3>
          <Input
            onChange={(event: any) => {
              let newMap = { ...map, seed: event.target.value };
              setMap(newMap);
            }}
          ></Input>
        </Space>

        <Space>
          <h3 style={{ width: "100px" }}>difficulty</h3>
          <TreeSelect
            showSearch
            style={{ width: "182px" }}
            value={map.difficult}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={(value: string) => {
              let newMap = { ...map, difficult: value };
              setMap(newMap);
              console.log(map);
            }}
          >
            <TreeNode value="Classic" title="Classic"></TreeNode>
            <TreeNode value="Expert" title="Expert"></TreeNode>
            <TreeNode value="Master" title="Master"></TreeNode>
            <TreeNode value="Journey" title="Journey"></TreeNode>
          </TreeSelect>
        </Space>
        <Space>
          <h3 style={{ width: "100px" }}>world size</h3>
          <TreeSelect
            showSearch
            style={{ width: "182px" }}
            value={map.size}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={(value: string) => {
              let newMap = { ...map, size: value };
              setMap(newMap);
              console.log(map);
            }}
          >
            <TreeNode value="Small" title="Small"></TreeNode>
            <TreeNode value="Medium" title="Medium"></TreeNode>
            <TreeNode value="Large" title="Large"></TreeNode>
          </TreeSelect>
        </Space>
      </Modal>
      <Space direction="vertical" size="small">
        <h2>basic</h2>
        <Space>
          <h3 style={{ width: "100px" }}>Password</h3>
          <Input
            onChange={(event: any) => {
              conf.password = event.target.value;
              Props.updateConf(conf);
            }}
            value={conf.password}
          ></Input>
        </Space>
        <Space>
          <h3 style={{ width: "100px" }}>Port</h3>
          <Input
            defaultValue={"7777"}
            onChange={(event: any) => {
              conf.port = event.target.value;
              Props.updateConf(conf);
            }}
            value={conf.port}
          ></Input>
        </Space>
        <Space>
          <h3 style={{ width: "100px" }}>map</h3>
          <TreeSelect
            id="TreeSelect"
            showSearch
            style={{ width: "182px" }}
            value={conf.map}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={(value: string) => {
              conf.map = value;
              Props.updateConf(conf);
            }}
          >
            {worlds.map((world) => {
              return (
                <TreeNode value={world} title={world} key={world}></TreeNode>
              );
            })}
            <TreeNode
              title={
                <div style={{ marginLeft: "-15px" }}>
                  <Button type="link" onClick={showModal}>
                    创建新地图
                  </Button>
                </div>
              }
              value="parent 12"
            />
          </TreeSelect>
        </Space>
        <Space>
          <h3 style={{ width: "100px" }}>language</h3>
          <TreeSelect
            showSearch
            style={{ width: "182px" }}
            value={conf.language}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={(value: string) => {
              conf.language = value;
              Props.updateConf(conf);
            }}
          >
            <TreeNode value="en-US" title="en-US"></TreeNode>
            <TreeNode value="zh-Hans" title="zh-Hans"></TreeNode>
            <TreeNode value="de-DE" title="de-DE"></TreeNode>
            <TreeNode value="it-IT" title="it-IT"></TreeNode>
            <TreeNode value="fr-FR" title="fr-FR"></TreeNode>
            <TreeNode value="es-ES" title="es-ES"></TreeNode>
            <TreeNode value="pt-BR" title="pt-BR"></TreeNode>
            <TreeNode value="pl-PL" title="pl-PL"></TreeNode>
          </TreeSelect>
        </Space>
        <Space>
          <h3 style={{ width: "100px" }}>motd</h3>
          <Input
            value={conf.motd}
            onChange={(event: any) => {
              conf.motd = event.target.value;
              Props.updateConf(conf);
            }}
          ></Input>
        </Space>
        <Space>
          <h3 style={{ width: "100px" }}>maxplayer</h3>
          <Input
            id="maxnum"
            value={conf.maxnum}
            onChange={(event: any) => {
              conf.maxnum = event.target.value;
              Props.updateConf(conf);
            }}
          ></Input>
        </Space>
      </Space>
      <Space direction="vertical" size="small" style={{ marginLeft: "60px" }}>
        <h2>pro</h2>
        <Space>
          <h3 style={{ width: "100px" }}>npcstream</h3>
          <Slider
            min={0}
            max={60}
            onChange={(value: number) => {
              conf.npcstream = value;
              Props.updateConf(conf);
            }}
            style={{ width: "120px" }}
            value={typeof conf.npcstream === "number" ? conf.npcstream : 0}
          />
          <InputNumber
            min={0}
            max={60}
            style={{ margin: "0 16px", width: "60px" }}
            defaultValue={0}
            value={conf.npcstream}
            onChange={(value: number) => {
              conf.npcstream = value;
              Props.updateConf(conf);
            }}
          ></InputNumber>
        </Space>
        <Space>
          <h3 style={{ width: "100px" }}>priority</h3>
          <Slider
            min={0}
            max={5}
            onChange={(value: number) => {
              conf.priority = value;
              Props.updateConf(conf);
            }}
            style={{ width: "120px" }}
            value={typeof conf.priority === "number" ? conf.priority : 0}
          />
          <InputNumber
            min={0}
            max={5}
            style={{ margin: "0 16px", width: "60px" }}
            defaultValue={0}
            value={conf.priority}
            onChange={(value: number) => {
              conf.priority = value;
              Props.updateConf(conf);
            }}
          ></InputNumber>
        </Space>

        <Space>
          <h3 style={{ width: "100px" }}>listen ip</h3>
          <Input
            onChange={(event: any) => {
              conf.ip = event.target.value;
              Props.updateConf(conf);
            }}
          ></Input>
        </Space>
        <Space>
          <h3 style={{ width: "60px" }}>steam</h3>
          <Switch
            onChange={(e) => {
              conf.steam = e;
              Props.updateConf(conf);

              setVisible(e);
            }}
            checked={conf.steam}
          />
          <h3 style={{ width: "60px", marginLeft: "30px" }}>lobby</h3>
          <Switch
            disabled={!visible}
            onChange={(e) => {
              conf.lobby = e;
              Props.updateConf(conf);
            }}
            defaultChecked={false}
            checked={conf.steam ? conf.lobby : false}
          />
        </Space>
        <Space>
          <h3 style={{ width: "60px" }}>upnp</h3>
          <Switch
            onChange={(e) => {
              conf.upnp = e;
              Props.updateConf(conf);
            }}
            checked={conf.upnp}
          />
          <h3 style={{ width: "60px", marginLeft: "30px" }}>banlist</h3>
          <Switch
            onChange={(e) => {
              conf.banlist = e;
              Props.updateConf(conf);
            }}
            checked={conf.banlist}
          />
        </Space>
        <Space>
          <h3 style={{ width: "60px" }}>secure</h3>
          <Switch
            onChange={(e) => {
              conf.secure = e;
              Props.updateConf(conf);
            }}
            checked={conf.secure}
          />
        </Space>
      </Space>
    </div>
  );
};

export default Item;
