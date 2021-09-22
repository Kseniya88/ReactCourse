import AUTHORS from "../../Utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGES";

export const addMessage = (chatId, text, author) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    text,
    author,
  },
});

export const deleteMessage = (chatId, id) => ({
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    id,
  },
});

let timer;

export const addMessageWithReply = (chatId, text, author) => (dispatch) => {
  dispatch(addMessage(chatId, text, author));

  if (author === AUTHORS.HUMAN) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(addMessage(chatId, "Hi! I am bot)", AUTHORS.BOT));
    }, 1500);
  }
};
