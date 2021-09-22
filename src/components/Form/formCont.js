import React, { useState, useCallback, useRef } from "react";
import { FormView } from "./formView";

export const FormCont = ({ onSubmit }) => {
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
    <FormView
      onSubmit={handleSubmit}
      inputRef={inputRef}
      value={value}
      onChange={handleChange}
    />
  );
};
