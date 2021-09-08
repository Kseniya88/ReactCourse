import React from "react";
import "./../../App.scss";

const Message = ({ text, name }) => {
  return (
    <>
      <div>{text}</div>
      <div>{name}</div>
    </>
  );
};

export default Message;
