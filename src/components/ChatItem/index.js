import React from "react";
import { ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./../../App.scss";

export const ChatItem = ({ chat }) => {
  return (
    <ListItem>
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
    </ListItem>
  );
};
