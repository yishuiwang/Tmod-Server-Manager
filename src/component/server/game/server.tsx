import { useState } from 'react';
import { BoxStyle } from '../../../static/css/board';
import Finished from './finished';
import Started from './started';

const style = { ...BoxStyle, minHeight: '308px' };

export default function Server() {
  //服务器是否启动
  const [started, setStarted] = useState(false);
  //配置方案信息
  const [confsName, setConfsName] = useState([
    { id: 1, name: 'sbsz' },
    { id: 2, name: 'sbsz2' },
  ]);
  function GameAction(action: boolean) {
    setStarted(action);
  }

  return (
    <div style={style}>
      <h2>服务器信息：</h2>
      <div style={{ display: started ? 'none' : 'block' }}>
        <Finished startGame={GameAction} confs={confsName}></Finished>
      </div>
      <div style={{ display: started ? 'block' : 'none' }}>
        <Started closeGame={GameAction}></Started>
      </div>
    </div>
  );
}
