export const setAnswerReducer = (state = "", actions) => {
  switch (actions.type) {
    case "SET_ANS":
      state = actions.payload.answer;
      return state;
    default:
      return state;
  }
};
