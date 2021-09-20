import { List } from "@material-ui/core";
import "./../../App.scss";
import { GutterlessList } from "../ChatItem";
import { AddChatList } from "../AddChatList";

export const ChatList = ({ chats, onDeleteChat, onAddChat }) => {
  return (
    <List>
      {chats.map((chat) => (
        <GutterlessList
          chat={chat}
          key={chat.id}
          id={chat.id}
          onDelete={onDeleteChat}
        />
      ))}
      <AddChatList onAddChat={onAddChat} />
    </List>
  );
};
