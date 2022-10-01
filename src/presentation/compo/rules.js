import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as FARMS } from "../../assets/FARMS.svg";
import { ReactComponent as CRABS } from "../../assets/CRABS.svg";
import { ReactComponent as HELLO } from "../../assets/HELLO.svg";

export default function Rules() {
  const navigate = useNavigate();
  return (
    <>
      <div className="rules-con">
        {/* cross */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="cross"
          onClick={() => {
            navigate("/");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1>How To Play?</h1>
        <div className="rules-scroll">
          <p>Guess the WORDLE.</p>
          <p>
            Each guess must be a valid 5-letter word. Hit the enter button to
            submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
          <FARMS />
          <p>
            The letter <span style={{ color: "#6EEC79" }}>F</span> is in the
            word and in the correct spot.
          </p>
          <CRABS />
          <p>
            The letter <span style={{ color: "#ECC66E" }}>A</span> is in the
            word but in the wrong spot.
          </p>
          <HELLO />
          <p>The letters are not in the word in any spot.</p>
        </div>
      </div>
    </>
  );
}
