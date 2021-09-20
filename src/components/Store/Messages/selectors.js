export const selectMessages = (state) => state.messages.messages;
export const selectMessagesById = (chatId) => (state) =>
  state.messages.messages[chatId];
