import React, { useState } from 'react';

interface Mod {
  id: string;
  name: string;
  isEnable: Boolean;
}

const initial: Mod[] = [
  { id: '1', name: 'mod1', isEnable: true },
  { id: '2', name: 'mod2', isEnable: false },
  { id: '3', name: 'mod3', isEnable: true },
];

export default function Mod() {
  const [modList, setModList] = useState(initial);
  return (
    <div>
      <h2>模组信息：</h2>
      <h3>模组列表</h3>
      <h4>
        {modList.map((m) => {
          return <div>{m.name}</div>;
        })}
      </h4>
    </div>
  );
}
