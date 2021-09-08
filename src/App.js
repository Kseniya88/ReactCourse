import { useState, useEffect, useRef, useCallback } from "react";
import "./App.scss";
import Message from "./components/Message";
import TextField from "@material-ui/core/TextField";
import { v4 as uuid } from "uuid";
import AlignItemsList from "./components/AlignItemsList";
import IconLabelButtons from "./components/IconLabelButtons";
import { StylesProvider } from "@material-ui/core/styles";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const words = [
    {
      name: "Иван",
      id: uuid(),
    },
    {
      name: "Катя",
      id: uuid(),
    },
    {
      name: "Лена",
      id: uuid(),
    },
  ];

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "HUMAN") {
      let timer = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Привет", author: "BOT", id: uuid() },
        ]);
      }, 1500);
      inputRef.current.focus();
      return () => {
        clearTimeout(timer);
      };
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputRef.current.value, author: "HUMAN", id: uuid() },
    ]);
    setValue("");
    inputRef.current.focus();
  };

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  // const messagesToShow = useMemo(() => {
  //   console.log("filter...");
  //   return messages.filter(({ text }) =>
  //     text.includes("Душа в душу могут жить только матрешки.")
  //   );
  // }, [messages]);
  // const messagesToShow = messages.filter(({ text }) => text.includes("nnn"));
  // console.log("filter...");

  return (
    <>
      <div className="App">
        <header className="App-header">
          <form className="App-header__Form" onSubmit={handleSubmit}>
            <TextField
              label="Ваш текст"
              type="text"
              inputRef={inputRef}
              value={value}
              onChange={handleChange}
              autoFocus={true}
            />
            <StylesProvider injectFirst>
              <button className="App-header__Button">
                <IconLabelButtons />
              </button>
            </StylesProvider>
          </form>
          <form className="App-header__Message">
            {messages.map((message) => (
              <Message
                key={message.id}
                text={message.text}
                author={message.author}
                name={message.name}
                id={message.id}
              />
            ))}
          </form>
          <AlignItemsList />
        </header>
      </div>
    </>
  );
};

export default App;
