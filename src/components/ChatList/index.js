import { List, ListItem } from "@material-ui/core";
import Button from "./../Button";
import AccesAlarmIcon from "@material-ui/icons/AccessAlarm";
import { Link } from "react-router-dom";
import React from "react";
import "./../../App.scss";

export const ChatList = ({ chats }) => {
  return (
    <List>
      {chats.map((chat) => (
        <ListItem key={chat.id}>
          <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};
