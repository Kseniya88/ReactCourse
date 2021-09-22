import AddDeleteMessages from "../Message/AddDeleteMessages";
import AddDeleteChats from "./AddDeleteChats";

function Chats() {
  return (
    <>
      <div className="App">
        <AddDeleteChats />
        <AddDeleteMessages />
      </div>
    </>
  );
}

export default Chats;
