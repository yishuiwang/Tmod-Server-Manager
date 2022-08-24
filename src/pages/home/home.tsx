import File from '../../component/file/file';
import Server from '../../component/server/game/server';
import Mod from '../../component/server/mod';
import Player from '../../component/server/player';

export default function Home() {
  return (
    <div>
      <Server></Server>
      <Mod></Mod>
      <Player></Player>
      <File></File>
    </div>
  );
}
