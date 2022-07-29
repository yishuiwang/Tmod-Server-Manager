import React, { useState } from 'react';

interface player {
  id: string;
  nickname: string;
  isBaned: Boolean;
}

const initial: player[] = [
  { id: '1', nickname: 'sz1', isBaned: true },
  { id: '2', nickname: 'sz2', isBaned: false },
  { id: '3', nickname: 'sz3', isBaned: true },
];

export default function Player() {
  const [palyList, setPalyList] = useState(initial);
  return (
    <div>
      <h2>玩家信息：</h2>
      <h3>在线列表</h3>
      <h4>
        {palyList.map((p) => {
          return <div>{p.nickname}</div>;
        })}
      </h4>
      <h3>黑名单</h3>
    </div>
  );
}
