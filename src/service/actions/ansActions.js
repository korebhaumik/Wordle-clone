import answer from "../utils/wordData";

const setAns = () => {
  return {
    type: "SET_ANS",
    payload: { answer: answer.split("") },
  };
};

export default setAns;
