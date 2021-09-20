import { useState } from "react";
import { List, TextField } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import { StylesProvider } from "@material-ui/core/styles";

export const AddChatList = ({ onAddChat }) => {
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
    <StylesProvider injectFirst>
      <List>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Название чата"
            variant="standard"
            type="text"
            value={value}
            onChange={handleChange}
            autoFocus={true}
          />
          <Button
            className="btn-add-chat-list"
            variant="primary"
            type="submit"
            disabled={!value}
          >
            Add chat
          </Button>
        </form>
      </List>
    </StylesProvider>
  );
};
