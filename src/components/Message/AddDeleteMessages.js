import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { FormCont } from "../Form/formCont";
import Message from "../Message";
import AUTHORS from "../Utils/constants.js";
import { addMessageWithReply } from "../Store/Messages/actions";
import { selectIfChatExists } from "../Store/Chats/selectors";

function AddDeleteMessages() {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);

  const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
  const chatExist = useSelector(selectChatExists);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageWithReply(chatId, text, author));
    },
    [chatId]
  );

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
            <FormCont onSubmit={handleAddMessage} />
          </>
        )}
      </div>
    </>
  );
}

export default AddDeleteMessages;
