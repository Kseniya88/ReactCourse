import React, { useState, useCallback, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "./../Button";
import IconLabelButtons from "../IconLabelButtons";
import { StylesProvider } from "@material-ui/core/styles";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");

    inputRef.current.focus();
  };

  return (
    <>
      <StylesProvider injectFirst>
        <form className="App-header__Form" onSubmit={handleSubmit}>
          <TextField
            label="Ваш текст"
            type="text"
            inputRef={inputRef}
            value={value}
            onChange={handleChange}
            autoFocus={true}
          />
          <Button>
            <IconLabelButtons />
          </Button>
        </form>
      </StylesProvider>
    </>
  );
};
