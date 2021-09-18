import React from "react";
import "./../../App.scss";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        component="span"
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon></Icon>}
      >
        {<span className="Send">send</span>}
        <SendIcon />
      </Button>
    </div>
  );
}
