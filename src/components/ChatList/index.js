import React from "react";
import { List } from "@material-ui/core";
import "./../../App.scss";
import { ChatItem } from "../ChatItem";

export const ChatList = ({ chats }) => {
  return (
    <List>
      {chats.map((chat) => (
        <ChatItem chat={chat} key={chat.id} />
      ))}
    </List>
  );
};
