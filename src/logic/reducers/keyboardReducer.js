import { data } from "../../service/utils/wordData";

export const currentAttemptReducer = (state = [], actions) => {
  switch (actions.type) {
    case "CURRENT_ATTEMPT": {
      if (state.length < 5) {
        state = [...state, actions.payload.value];
        // state = state.join();
        return state;
      } else {
        // state[4] = actions.payload.value;
        return state;
      }
    }

    case "CLEAR_CURRENT_ATTEMPT": {
      return (state = []);
    }

    case "BACKSPACE_ATTEMPT": {
      if (state.length) {
        state = state.slice(0, -1);
        return state;
      }
      return state;
    }

    default: {
      return state;
    }
  }
};

export const allAttemptReducer = (state = [], actions) => {
  switch (actions.type) {
    case "ADD_ATTEMPT": {
      let wrd;
      let temp = actions.payload.value.join("");
      temp = temp.toLowerCase();

      // validation
      for (let i = 0; i < data.length; i++) {
        if (temp == data[i]) {
          wrd = actions.payload.value;
          break;
        } else wrd = "";
      }

      if (wrd.length == 5) {
        state = [wrd, ...state];
        return state;
      }
      return state;
    }
    default:
      return state;
  }
};

export const winReducer = (state = false, actions) => {
  switch (actions.type) {
    case "VALIDATE_WIN": {
      let ans = actions.payload.ans.join("");
      let wrd = actions.payload.value.join("");
      wrd = wrd.toLowerCase();
      if (wrd == ans) {
        return !state;
      }
      return state;
    }
    default:
      return state;
  }
};
