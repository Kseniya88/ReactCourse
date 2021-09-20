import { useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Message from "../Message";
import AUTHORS from "../Utils/constants.js";
import { Form } from "../Form";
import { addMessage } from "../Store/Messages/actions";
import { selectIfChatExists } from "../Store/Chats/selectors";

function AddDeleteMessages() {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);

  const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
  const chatExist = useSelector(selectChatExists);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessage(chatId, text, author));
    },
    [chatId]
  );

  useEffect(() => {
    let timer;
    const curMess = messages[chatId];
    if (!!chatId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN) {
      timer = setTimeout(() => {
        sendMessage("Hi! I am bot)", AUTHORS.BOT);
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [messages]);

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage(text, AUTHORS.HUMAN);
    },
    [sendMessage]
  );

  return (
    <>
      <div>
        {!!chatId && chatExist && (
          <>
            {(messages[chatId] || []).map((message) => (
              <Message key={message.id} text={message.text} id={message.id} />
            ))}
            <Form onSubmit={handleAddMessage} />
          </>
        )}
      </div>
    </>
  );
}

export default AddDeleteMessages;
