import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function WinScreen({ ans }) {
  const darkMode = useSelector((state) => state.darkMode);
  const mode = darkMode ? "d" : "l";
  const displayAns = ans.map((item) => (
    <div className={`blip-${mode}`} key={Math.random()}>
      {item}
    </div>
  ));
  return (
    <>
      <div className="block">{displayAns}</div>
      <Link to="/">
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          Play Again
        </button>
      </Link>
    </>
  );
}

export default WinScreen;
