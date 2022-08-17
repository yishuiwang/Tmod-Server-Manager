import {
  CloseCircleOutlined,
  DeleteOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Button, message, Space, Tooltip } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import { useState } from "react";
import {
  BorderBan,
  BorderOnline,
  BoxStyle,
  TitleStyle,
} from "./../../static/css/board";

interface player {
  id: string;
  nickname: string;
}

const initialPalyer: player[] = [
  { id: "1", nickname: "sz1" },
  { id: "2", nickname: "sz2" },
  { id: "3", nickname: "sz3" },
];

const initialBan: player[] = [
  { id: "1", nickname: "sbsz" },
  { id: "2", nickname: "nmsl" },
];

export default function Player() {
  const [palyList, setPalyList] = useState(initialPalyer);
  const [banPlayer, setBanPlayer] = useState(initialBan);
  const ban: ColumnsType<player> = [
    {
      title: "id",
      dataIndex: "id",
      key: "banid",
      render: (text) => <a>{text}</a>,
      width: "100px",
    },
    {
      title: "nickname",
      dataIndex: "nickname",
      key: "banname",
      render: (text) => <a>{text}</a>,
      width: "300px",
    },
    {
      title: "Action",
      key: "banaction",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="删除">
            <Button
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => delBlacklist(record)}
            />
          </Tooltip>
        </Space>
      ),
      width: "150px",
    },
  ];
  const normal: ColumnsType<player> = [
    {
      title: "id",
      dataIndex: "id",
      key: "normalid",
      render: (text) => <a>{text}</a>,
      width: "100px",
    },
    {
      title: "nickname",
      dataIndex: "nickname",
      key: "normalname",
      render: (text) => <a>{text}</a>,
      width: "300px",
    },
    {
      title: "Action",
      key: "normalaction",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="踢出服务器">
            <Button
              shape="circle"
              icon={<StopOutlined />}
              onClick={() => kickFormServer(record)}
            />
          </Tooltip>
          <Tooltip title="加入黑名单">
            <Button
              shape="circle"
              icon={
                <CloseCircleOutlined onClick={() => addBlacklist(record)} />
              }
            />
          </Tooltip>
        </Space>
      ),
      width: "150px",
    },
  ];

  function kickFormServer(record: any) {
    if (window.confirm("确定踢出服务器?")) {
      const newList = palyList.filter((Obj) => {
        return Obj.id !== record.id;
      });
      setPalyList(newList);
      message.success("已踢出");
    }
  }

  function addBlacklist(record: any) {
    if (window.confirm("确定加入黑名单?")) {
      let newList = palyList.filter((Obj) => {
        return Obj.id !== record.id;
      });
      setPalyList(newList);
      let banObj = {
        id: String(banPlayer.length + 1),
        nickname: record.nickname,
      };
      let banList = [...banPlayer, banObj];
      setBanPlayer(banList);
      message.success("已加入");
    }
  }

  function delBlacklist(record: any) {
    if (window.confirm("确定从黑名单中删除?")) {
      const newList = banPlayer.filter((Obj) => {
        return Obj.id !== record.id;
      });
      setBanPlayer(newList);
      message.success("已删除");
    }
  }

  return (
    <div style={BoxStyle}>
      <h2>玩家信息</h2>

      <div style={BorderOnline}>
        <Space direction="vertical">
          <h3 style={TitleStyle}>当前在线</h3>
          <div>
            <Table
              pagination={false}
              columns={normal}
              dataSource={palyList}
              style={{ marginBottom: "-3px" }}
              rowKey={(record) => record.id}
            />
          </div>
        </Space>
        <img src=""></img>
      </div>

      <div style={BorderBan}>
        <Space direction="vertical">
          <h3 style={TitleStyle}>黑名单</h3>
          <div>
            <Table
              pagination={false}
              columns={ban}
              dataSource={banPlayer}
              style={{ marginBottom: "-3px" }}
              rowKey={(record) => record.id}
            />
          </div>
        </Space>
      </div>
    </div>
  );
}
