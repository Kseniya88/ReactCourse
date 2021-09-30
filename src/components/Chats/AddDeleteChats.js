import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { ChatList } from "../ChatList";
import { addChat, deleteChat } from "../../components/Store/Chats/actions";

function AddDeleteChats() {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chats.chats);
  const history = useHistory(); // возвращает различные методы

  const handleAddChat = useCallback(
    (name) => {
      dispatch(addChat(name));
    },
    [dispatch]
  );

  const handleDeleteChat = useCallback(
    (id) => {
      dispatch(deleteChat(id));

      // не находимся ли мы на странице чата, которую удаляем
      if (chatId !== id) {
        return;
      }

      if (chats.length === 1) {
        history.push(`/chats/${chats[0].id}`);
      } else {
        history.push(`/chats`);
      }
    },
    [chatId, dispatch, chats, history]
  );

  return (
    <>
      <div className="App">
        <ChatList
          chats={chats}
          onAddChat={handleAddChat}
          onDeleteChat={handleDeleteChat}
        />
      </div>
    </>
  );
}

export default AddDeleteChats;
