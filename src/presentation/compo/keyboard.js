import { useState } from "react";
import { currentAttempt } from "../../logic/actions/keyboardActions";
import { clearAttempt } from "../../logic/actions/keyboardActions";
import {
  backspaceAttempt,
  addAttempt,
  validateWin,
} from "../../logic/actions/keyboardActions";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
// import Modal from "./modal";

function Keyboard({ ans }) {
  const lastAttempt = useSelector((state) => state.currentAttempt);
  const dispatch = useDispatch();

  const alplaClick = (event) => {
    dispatch(currentAttempt(event.currentTarget.id));
  };

  const alplaDelete = () => {
    dispatch(backspaceAttempt());
  };

  const click = async () => {
    dispatch(validateWin(lastAttempt, ans));
    dispatch(addAttempt(lastAttempt));
    dispatch(clearAttempt());
  };

  // const variant = {
  //   green: { backgroundColor: "#6EEC79", outlineColor: "#6EEC79" },
  //   yellow: { backgroundColor: "#ECC66E", outlineColor: "#ECC66E" },
  //   grey: { backgroundColor: "#929394", outlineColor: "#929394" },
  // };

  return (
    <>
      <div className="main-con">
        <div className="con-1">
          <div className="box" onClick={alplaClick} id="Q">
            q
          </div>
          <div className="box" onClick={alplaClick} id="W">
            w
          </div>
          <div className="box" onClick={alplaClick} id="E">
            e
          </div>
          <div className="box" onClick={alplaClick} id="R">
            r
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="T"
            // style={variant[char["t"]]}
          >
            t
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="Y"
            // style={variant[char["y"]]}
          >
            y
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="U"
            // style={variant[char["u"]]}
          >
            u
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="I"
            // style={variant[char["i"]]}
          >
            i
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="O"
            // style={variant[char["o"]]}
          >
            o
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="P"
            // style={variant[char["p"]]}
          >
            p
          </div>
        </div>
        <div className="con-1">
          <div
            className="box"
            onClick={alplaClick}
            id="A"
            // style={variant[char["a"]]}
          >
            a
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="S"
            // style={variant[char["s"]]}
          >
            s
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="D"
            // style={variant[char["d"]]}
          >
            d
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="F"
            // style={variant[char["f"]]}
          >
            f
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="G"
            // style={variant[char["g"]]}
          >
            g
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="H"
            // style={variant[char["h"]]}
          >
            h
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="J"
            // style={variant[char["j"]]}
          >
            j
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="K"
            // style={variant[char["k"]]}
          >
            k
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="L"
            // style={variant[char["l"]]}
          >
            l
          </div>
        </div>
        <div className="con-1">
          <div className="box-2" onClick={click}>
            Enter
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="Z"
            // style={variant[char["z"]]}
          >
            z
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="X"
            // style={variant[char["x"]]}
          >
            x
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="C"
            // style={variant[char["c"]]}
          >
            c
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="V"
            // style={variant[char["v"]]}
          >
            v
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="B"
            // style={variant[char["b"]]}
          >
            b
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="N"
            // style={variant[char["n"]]}
          >
            n
          </div>
          <div
            className="box"
            onClick={alplaClick}
            id="M"
            // style={variant[char["m"]]}
          >
            m
          </div>
          <div className="box" onClick={alplaDelete}>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 26"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Keyboard;
