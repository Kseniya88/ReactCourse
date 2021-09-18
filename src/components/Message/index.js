import React from "react";
import "./../../App.scss";

const Message = ({ text }) => {
  return (
    <>
      <div className="App__ChatList">{text}</div>
    </>
  );
};

export default Message;
