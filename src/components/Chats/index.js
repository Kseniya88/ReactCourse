import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { StylesProvider } from "@material-ui/core/styles";
import Message from "../Message";
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
  { name: "Space", id: "chat-1" },
  { name: "Universal", id: "chat-2" },
];

function Chats(props) {
  const { chatId } = useParams();
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages);

  const sendMessage = useCallback(
    (message) => {
      setMessages((prevMess) => ({
        ...prevMess,
        [chatId]: [...prevMess[chatId], message],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    let timer;
    const curMess = messages[chatId];
    if (!!chatId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN) {
      timer = setTimeout(() => {
        sendMessage({ text: "Hi! I am bot)", author: AUTHORS.BOT, id: uuid() });
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [messages]);

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage({
        text,
        author: AUTHORS.HUMAN,
        id: uuid(),
      });
    },
    [chatId, sendMessage]
  );
  return (
    <>
      <div className="App">
        {/* <header className="App-header"> */}
        <ChatList chats={chats} onAddChat />
        {!!chatId && (
          <>
            {messages[chatId].map((message) => (
              <Message key={message.id} text={message.text} id={message.id} />
            ))}
            <Form onSubmit={handleAddMessage} />
          </>
        )}
        {/* </header> */}
      </div>
    </>
  );
}

export default Chats;
