import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import darkMode from "../../logic/actions/navActions";
import Dropdown from "./dropdown.js";

function Nav({ ans }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.darkMode);
  const [open, setOpen] = useState(false);

  const path = theme
    ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z";

  const modechange = () => {
    if (theme) {
      return { color: "#F2F6FC" };
    } else {
      return { color: "#272A29" };
    }
  };

  return (
    <>
      <div className="nav-main">
        {/* menu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="menu-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          style={modechange()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <h1 style={modechange()}>WORDLE</h1>
        <div className={`icons`}>
          {/* clock */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="clock"
            style={modechange()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {/* sun-moon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="moon-icon"
            style={modechange()}
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
            className="info-icon"
            style={modechange()}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {/* arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="arrow"
          style={modechange()}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        {open && <Dropdown />}
      </div>
    </>
  );
}

export default Nav;
