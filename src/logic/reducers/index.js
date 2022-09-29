import { combineReducers } from "redux";
import { darkModeReducer } from "./nav.js";
import { setAnswerReducer } from "../../service/reducers/setAnswer.js";
import {
  currentAttemptReducer,
  allAttemptReducer,
  winReducer,
} from "./keyboardReducer.js";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  answer: setAnswerReducer,
  currentAttempt: currentAttemptReducer,
  attempts: allAttemptReducer,
  win: winReducer,
});

export default rootReducer;
