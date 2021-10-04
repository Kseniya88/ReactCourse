import { useState } from "react";
import { AddChatListView } from "./addChatListView";

export const AddChatListCont = ({ onAddChat }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddChat(value);
    setValue("");
  };

  return (
    <AddChatListView
      onSubmit={handleSubmit}
      onChange={handleChange}
      value={value}
    />
  );
};
