import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { StylesProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

export function ChatItem({ chat, onDelete, id }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <StylesProvider injectFirst>
      <List>
        <ListItem>
          <IconButton component={Link} to={`/chats/${chat.id}`}>
            <CommentIcon />
          </IconButton>
          <ListItemText primary={chat.name} />
          <DeleteForeverIcon
            className="btn-delete-chat"
            onClick={handleDelete}
          />
        </ListItem>
      </List>
    </StylesProvider>
  );
}

export default ChatItem;
