import { useState, useEffect, useRef } from "react";
import "./App.scss";
import Message from "./components/Message";

const App = (props) => {
  const [messages, setMessages] = useState([]);
  const valueRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages((messages) => [
      ...messages,
      { text: valueRef.current.value, author: "HUMAN" },
    ]);
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "HUMAN") {
      const words = [
        "Злость — это такое состояние, когда язык и руки работают быстрее мозга.",
        "Господа, за вами будущее. Отойдите.",
        "Будешь много знать – очень расстроишься.",
        "Шоколад вдвойне вкусней, если его нельзя.",
        "Душа в душу могут жить только матрешки.",
        "Будильник ненавидят всего в двух случаях – когда он звенит, и когда он не прозвенел.",
        "В жизни каждого человека наступает момент, когда давно уже пора спать.",
      ];
      const random = Math.floor(Math.random() * words.length);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: words[random], author: "BOT" },
        ]);
      }, 1500);
    }
  }, [messages]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <form className="Form">
            <input className="Input" type="text" ref={valueRef} />
            <button className="Button" onClick={handleSubmit}>
              Отправить
            </button>
          </form>
          {messages.map((message, i) => (
            <Message key={i} text={message.text} author={message.author} />
          ))}
        </header>
      </div>
    </>
  );
};

export default App;
