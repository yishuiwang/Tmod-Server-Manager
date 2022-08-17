import File from "../../component/file/file";
import Mod from "../../component/server/mod";
import Player from "../../component/server/player";
import Server from "../../component/server/server";

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
