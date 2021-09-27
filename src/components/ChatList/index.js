import { List } from "@material-ui/core";
import "./../../App.scss";
import { ChatItem } from "../ChatItem";
import { AddChatListCont } from "../AddChatList/addChatListCont";

export const ChatList = ({ chats, onDeleteChat, onAddChat }) => {
  return (
    <List>
      {chats.map((chat) => (
        <ChatItem
          chat={chat}
          key={chat.id}
          id={chat.id}
          onDelete={onDeleteChat}
        />
      ))}
      <AddChatListCont onAddChat={onAddChat} />
    </List>
  );
};
