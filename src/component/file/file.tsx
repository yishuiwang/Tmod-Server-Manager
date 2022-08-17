import { CloudUploadOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { useState } from "react";
import { BorderMap, BorderMod } from "./../../static/css/board";

const boxStyle = {
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 0 0 5px rgb(0 0 0 / 13%)",
  marginTop: "20px",
  backgroundColor: "white",
  marginBottom: "100px",
};

export default function File() {
  const [modName, setModName] = useState();
  const [mapName, setMapName] = useState();
  function uploadmod() {
    document.getElementById("uploadmod")?.click();
  }
  function uploadmap() {
    document.getElementById("uploadmap")?.click();
  }
  function modChange(event: any) {
    const filename = event.target.files[0].name;
    //const file = event.target.files[0];
    // if (String(filename).slice(-4) === '.tmod') {
    //   setModName(filename);
    // }
    setModName(filename);
  }

  function mapChange(event: any) {
    const filename = event.target.files[0].name;
    //const file = event.target.files[0];
    setMapName(filename);
  }

  return (
    <div>
      <input
        id="uploadmod"
        type="file"
        style={{ opacity: 0, width: "1px", height: "1px" }}
        onChange={modChange}
      />
      <input
        id="uploadmap"
        type="file"
        style={{ opacity: 0, width: "1px", height: "1px" }}
        onChange={mapChange}
      />

      <div style={boxStyle}>
        <h2>File</h2>
        <div style={BorderMod}>
          <Space direction="vertical" size={20} style={{ width: "100%" }}>
            <h3>模组</h3>
            <div>
              <Input
                style={{ height: "45px", width: "55%", float: "left" }}
                placeholder="Mod..."
                prefix={<CloudUploadOutlined />}
                onClick={uploadmod}
                value={modName}
              />
              <Button
                style={{
                  height: "45px",
                  float: "left",
                  marginLeft: "-1px",
                  backgroundColor: "#fafafa",
                }}
                onClick={uploadmod}
              >
                选择Mod
              </Button>
              <Button
                type="primary"
                shape="round"
                size={"large"}
                style={{ height: "45px", marginLeft: "15px" }}
              >
                上传Mod
              </Button>
            </div>
          </Space>
        </div>

        <div style={BorderMap}>
          <Space direction="vertical" size={20} style={{ width: "100%" }}>
            <h3>地图</h3>
            <div>
              <Input
                style={{ height: "45px", width: "55%", float: "left" }}
                placeholder="Map..."
                prefix={<CloudUploadOutlined />}
                onClick={uploadmap}
                value={mapName}
              />
              <Button
                style={{
                  height: "45px",
                  float: "left",
                  marginLeft: "-1px",
                  backgroundColor: "#fafafa",
                }}
                onClick={uploadmap}
              >
                选择Map
              </Button>
              <Button
                type="primary"
                shape="round"
                size={"large"}
                style={{ height: "45px", marginLeft: "15px" }}
              >
                上传地图
              </Button>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}
