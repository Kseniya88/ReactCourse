import { List, TextField } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import { StylesProvider } from "@material-ui/core/styles";

export const AddChatListView = ({ onSubmit, onChange, value }) => (
  <StylesProvider injectFirst>
    <List>
      <form onSubmit={onSubmit}>
        <TextField
          id="standard-basic"
          label="Название чата"
          variant="standard"
          type="text"
          value={value}
          onChange={onChange}
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
