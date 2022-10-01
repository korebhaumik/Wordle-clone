import { React } from "react";
import { useSelector } from "react-redux";

function Game({ ans }) {
  const currentAttempt = useSelector((state) => state.currentAttempt);
  const darkMode = useSelector((state) => state.darkMode);
  const attempts = useSelector((state) => state.attempts);
  const displayArr = [...attempts, [], [], [], [], []];

  const mode = darkMode ? "d" : "l";

  const blipStyle = (wrd, pos) => {
    if (wrd) {
      if (ans[pos] === wrd[pos]) {
        return {
          backgroundColor: "rgb(0,0,0,0)",
          outline: `solid ${4}px`,
          outlineColor: "#6EEC79",
        };
      } else if (ans.includes(wrd[pos])) {
        return {
          backgroundColor: "rgb(0,0,0,0)",
          outline: `solid ${4}px`,
          outlineColor: "#ECC66E",
        };
      }
    }
  };

  const newStyle = (index) => {
    if (currentAttempt.length == index) {
      return {
        // backgroundColor: "#F2F6FC",
        // color: "black",
        outlineColor: "#F2F6FC",
        outline: `solid ${3}px`,
      };
    }
  };

  const show = displayArr.map((wrd, index) => {
    return (
      <div className="blop" key={index}>
        <div className={`blip-${mode}`} id={0} style={blipStyle(wrd, 0)}>
          {wrd[0]}
        </div>
        <div className={`blip-${mode}`} id={1} style={blipStyle(wrd, 1)}>
          {wrd[1]}
        </div>
        <div className={`blip-${mode}`} id={2} style={blipStyle(wrd, 2)}>
          {wrd[2]}
        </div>
        <div className={`blip-${mode}`} id={3} style={blipStyle(wrd, 3)}>
          {wrd[3]}
        </div>
        <div className={`blip-${mode}`} id={4} style={blipStyle(wrd, 4)}>
          {wrd[4]}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="game">
        <div className="block">
          <div className={`blip-${mode}`} style={newStyle(0)}>
            {currentAttempt[0]}
          </div>
          <div className={`blip-${mode}`} style={newStyle(1)}>
            {currentAttempt[1]}
          </div>
          <div className={`blip-${mode}`} style={newStyle(2)}>
            {currentAttempt[2]}
          </div>
          <div className={`blip-${mode}`} style={newStyle(3)}>
            {currentAttempt[3]}
          </div>
          <div className={`blip-${mode}`} style={newStyle(4)}>
            {currentAttempt[4]}
          </div>
        </div>
        <div className="scroll">{show}</div>
      </div>
    </>
  );
}

export default Game;
