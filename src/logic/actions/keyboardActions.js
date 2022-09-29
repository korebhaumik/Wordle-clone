export const currentAttempt = (value) => {
  return {
    type: "CURRENT_ATTEMPT",
    payload: {
      value,
    },
  };
};

export const addAttempt = (value) => {
  return {
    type: "ADD_ATTEMPT",
    payload: {
      value,
    },
  };
};
export const validateWin = (value, ans) => {
  return {
    type: "VALIDATE_WIN",
    payload: {
      value,
      ans,
    },
  };
};

export const clearAttempt = () => {
  return {
    type: "CLEAR_CURRENT_ATTEMPT",
  };
};

export const backspaceAttempt = () => {
  return {
    type: "BACKSPACE_ATTEMPT",
  };
};

// export default currentAttempt;
