export const darkModeReducer = (state = true, actions) => {
  switch (actions.type) {
    case "SET_MODE":
      return !state;
    default:
      return state;
  }
};
