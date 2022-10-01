import { useState, useEffect, React } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Rules from "./rules";
import Game from "./game";
import WinScreen from "./winScreen";

function Main({ ans }) {
  const darkMode = useSelector((state) => state.darkMode);
  const win = useSelector((state) => state.win);
  const navigate = useNavigate();

  useEffect(() => {
    if (win) {
      navigate("/winScreen");
    }
  }, [win]);

  const themechange = () => {
    if (darkMode) {
      return { backgroundColor: "#1E1E1E", color: "#F2F6FC" };
    } else {
      return { backgroundColor: "white", color: "#272A29" };
    }
  };

  return (
    <>
      <div className="main-div" style={themechange()}>
        <Routes>
          <Route exact path="/" element={<Game ans={ans} />} />
          {win && (
            <Route exact path="/winScreen" element={<WinScreen ans={ans} />} />
          )}
          <Route exact path="/rules" element={<Rules />} />
        </Routes>
      </div>
    </>
  );
}

export default Main;
