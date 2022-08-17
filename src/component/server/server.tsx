import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  PoweroffOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message, Space, TreeSelect } from "antd";
import { TreeNode } from "antd/lib/tree-select";
import { useState } from "react";
import { Border, BoxStyle } from "../../static/css/board";

const initialServer = {
  ip: "192.168.200.1",
  num: "16",
  name: "空岛生存带师",
  seed: "3.3.2.1964603061",
  serverVersion: "tModLoader v2022.6.96.4",
  clientVersion: "Terraria Server v1.4.3.6",
  time: "8:03 PM",
};

export default function Server() {
  const [server, setServer] = useState(initialServer);
  const [time, setTime] = useState(server.time);

  // useEffect(() => {
  //   axios.post("http://localhost:9000/api/server/Info").then(
  //     (response) => {
  //       console.log(response.data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }, []);

  const changeTime = (newValue: string) => {
    switch (newValue) {
      case "dawn":
        setTime("4:30 AM");
        break;
      case "noon":
        setTime("12:00 PM");
        break;
      case "dusk":
        setTime("7:30 PM");
        break;
      case "midnight":
        setTime("12:00 AM");
        break;
      default:
        console.log("wrong time!");
    }
  };

  const handleChangeTime = () => {
    message.success("设置时间成功");
  };

  const restart = () => {
    message.success("重启服务器成功");
  };
  const stop = () => {
    message.success("关闭服务器成功");
  };
  const start = () => {
    message.success("开启服务器");
  };

  return (
    <div style={BoxStyle}>
      {/* <h2>当前没有启动实例</h2>

      <Button type="primary" size="large">
        创建一个新实例
      </Button>
      <br></br>
      <Button type="primary" size="large">
        从现有实例启动
      </Button> */}

      <h2>服务器信息：</h2>
      <div style={Border}>
        <div style={{ display: "inline-flex", width: "33%", padding: "10px" }}>
          <Space direction="vertical" size="small">
            <Space>
              <h3>ip地址</h3>
              <Input id="ip" value={server.ip}></Input>
            </Space>
            <Space size={22}>
              <h3>在线</h3>
              <Input value={server.num}></Input>
            </Space>
            <Space size={22}>
              <h3>地图</h3>
              <Input value={server.name}></Input>
            </Space>
            <Space size={22}>
              <h3>种子</h3>
              <Input value={server.seed}></Input>
            </Space>
            <Space size={22}>
              <h3>时间</h3>
              <Input value={time}></Input>
            </Space>
          </Space>
        </div>
        <div style={{ display: "inline-flex", width: "33%" }}>
          <Space direction="vertical" size="small">
            <Space>
              <h3>服务器版本</h3>
              <Input value={server.serverVersion}></Input>
            </Space>
            <Space>
              <h3>客户端版本</h3>
              <Input value={server.clientVersion}></Input>
            </Space>
          </Space>
        </div>
        <div
          style={{ display: "inline-flex", width: "33%", marginTop: "10px" }}
        >
          <Space direction="vertical" size="small">
            <Space>
              <Button size="large" onClick={restart} icon={<ReloadOutlined />}>
                重启
              </Button>
              <Button size="large" onClick={stop} icon={<PoweroffOutlined />}>
                关服
              </Button>
              <Button
                size="large"
                onClick={start}
                icon={<CheckCircleOutlined />}
              >
                开服
              </Button>
            </Space>
            <Space>
              <TreeSelect
                id="timeTree"
                showSearch
                style={{ width: "185px" }}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="设置时间"
                allowClear
                treeDefaultExpandAll
                size="large"
                onChange={changeTime}
              >
                <TreeNode value="dawn" title="黎明"></TreeNode>
                <TreeNode value="noon" title="正午"></TreeNode>
                <TreeNode value="dusk" title="黄昏"></TreeNode>
                <TreeNode value="midnight" title="午夜"></TreeNode>
              </TreeSelect>
              <Button
                size="large"
                icon={<ClockCircleOutlined />}
                onClick={handleChangeTime}
              >
                时间
              </Button>
            </Space>
          </Space>
        </div>
      </div>
    </div>
  );
}
