import React from "react";
import darkMode from "../../logic/actions/navActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.darkMode);
  const path = theme
    ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z";

  const modechange = () => {
    if (!theme) {
      return { backgroundColor: "#F2F6FC" };
    } else {
      return { backgroundColor: "#1E1E1E" };
    }
  };
  const iconchange = () => {
    if (theme) {
      return { color: "#D9D9D9" };
    } else {
      return { color: "#1E1E1E" };
    }
  };

  return (
    <div className="dropdown" style={modechange()}>
      {/* sun-moon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        style={iconchange()}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        onClick={() => {
          dispatch(darkMode());
        }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
      {/* info */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        style={iconchange()}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        onClick={() => {
          navigate("/rules");
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
}
