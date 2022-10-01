import { useState, useEffect, React } from "react";
import Keyboard from "./compo/keyboard";
import Main from "./compo/main";
import Nav from "./compo/nav";
import setAns from "../service/actions/ansActions";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/style.css";

function App() {
  const dispatch = useDispatch();
  const ans = useSelector((state) => state.answer);
  const theme = useSelector((state) => state.darkMode);

  useEffect(() => {
    dispatch(setAns());
  }, []);

  function changebackground() {
    if (theme) {
      document.body.style.backgroundColor = "#272A29";
    } else if (!theme) {
      document.body.style.backgroundColor = "#F2F6FC";
    }
  }
  changebackground();

  return (
    <Router>
      <div className="app">
        <Nav ans={ans} />
        <Main ans={ans} />
        <Keyboard ans={ans} />
      </div>
    </Router>
  );
}

export default App;
