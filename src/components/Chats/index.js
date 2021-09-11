import { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import Message from "../Message";
import { v4 as uuid } from "uuid";
import { StylesProvider } from "@material-ui/core/styles";
import AUTHORS from "../Utils/constants.js";
import { Form } from "../Form";
import { ChatList } from "../ChatList";

const initialMessages = {
  "chat-1": [
    { text: "Sky", author: "HUMAN", id: uuid() },
    { text: "Sun", author: "HUMAN", id: uuid() },
  ],
  "chat-2": [],
};

const initialChats = [
  { name: "Space", author: "HUMAN", id: uuid() },
  { name: "Universal", author: "HUMAN", id: uuid() },
];

function Chats(props) {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(initialMessages);
  const [chats, setChats] = useState(initialChats);
  const inputRef = useRef(null);

  const sendMessage = useCallback(
    (message) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], message],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    let timer;
    const curMess = messages[chatId];
    if (!!chatId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN) {
      timer = setTimeout(() => {
        sendMessage({ text: "Привет", author: AUTHORS.BOT, id: uuid() });
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [messages]);

  const handleSubmit = useCallback(
    (text) => {
      sendMessage({
        text: inputRef.current.value,
        author: AUTHORS.HUMAN,
        id: uuid(),
      });
    },
    [chatId, sendMessage]
  );

  return (
    <>
      <div className="App">
        <header className="App-header">
          <StylesProvider injectFirst>
            <ChatList chats={chats} onAddChat />
            <form onSubmit={handleSubmit}>
              {!!chatId && (
                <>
                  {messages[chatId].map((message) => (
                    <Message
                      key={message.id}
                      text={message.text}
                      id={message.id}
                    />
                  ))}
                </>
              )}
              <Form />
            </form>
          </StylesProvider>
        </header>
      </div>
    </>
  );
}

export default Chats;
