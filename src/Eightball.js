import React, { useState } from "react";
import originals from "./originalAnswers";
import "./Eightball.css";

function Eightball({ answers = originals }) {
  const [text, setText] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [greens, setGreens] = useState(0);
  const [yellows, setYellows] = useState(0);
  const [reds, setReds] = useState(0);

  const showResult = () => {
    const number = Math.floor(Math.random() * answers.length);
    const color = answers[number].color;
    setText(answers[number].msg);
    setColor(color);
    color === "green" && setGreens(greens + 1);
    color === "goldenrod" && setYellows(yellows + 1);
    color === "red" && setReds(reds + 1);
  };

  const reset = () => {
    setColor("black");
    setText("Think of a Question");
    setGreens(0);
    setYellows(0);
    setReds(0);
  };

  return (
    <div>
      <div
        className="Eightball-ball"
        onClick={showResult}
        style={{ backgroundColor: color }}
      >
        <p className="Eightball-text">{text}</p>
      </div>
      <button className="Eightball-reset" onClick={reset}>
        Reset
      </button>
      <h3>Tally</h3>
      <h4>
        Green: {greens} | Yellow: {yellows} | Red: {reds}
      </h4>
    </div>
  );
}

export default Eightball;
