import { v4 as uuid } from "uuid";
import { DELETE_CHAT } from "../Chats/actions";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialState = {
  messages: [],
};

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.chatId]: [
            ...(state.messages[payload.chatId] || []),
            { id: uuid(), text: payload.text, author: payload.author },
          ],
        },
      };
    }
    case DELETE_CHAT: {
      const newMessages = { ...state.messages };
      delete state.messages[payload];

      return {
        ...state,
        messages: newMessages,
      };
    }
    case DELETE_MESSAGE: {
      const newChatMessages = state.messages[payload.chatId].filter(
        ({ id }) => id !== payload.id
      );
      return {
        ...state.messages,
        [payload.chatId]: newChatMessages,
      };
    }

    default:
      return state;
  }
};
