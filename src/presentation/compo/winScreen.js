import React from "react";
import {
  resetWin,
  clearAllAttempts,
} from "../../logic/actions/winScreenACtions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function WinScreen({ ans }) {
  const win = useSelector((state) => state.win);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkMode);
  const mode = darkMode ? "d" : "l";
  const displayAns = ans.map((item) => (
    <div
      className={`blip-${mode}`}
      style={{
        outline: `solid ${3.5}px`,
        outlineColor: "#6EEC79",
        backgroundColor: "rgba(0,0,0,0)",
        // backgroundColor: "#6EEC79",
      }}
      key={Math.random()}
    >
      {item}
    </div>
  ));
  return (
    <>
      <div className="winScreen-con">
        <div className="block">{displayAns}</div>

        <div className="winScreen-content">
          <h3>
            Game Mode: <span style={{ color: "#ECC66E" }}>Normal</span>
          </h3>
          <h3>Time Taken: 4min 2sec</h3>
          <h3>Attempts: 7</h3>
          <h3 style={{ color: "#F26161" }}>Hint Used </h3>
        </div>

        <button
          onClick={() => {
            dispatch(resetWin());
            dispatch(clearAllAttempts());
            navigate("/");
          }}
        >
          Play Again
        </button>
      </div>
    </>
  );
}

export default WinScreen;
