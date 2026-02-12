import React from "react";
import { useState } from "react";
export const TrafficLight = () => {
  const [colors, setColors] = useState(["red", "yellow", "green"]);
  const [color, setColor] = useState("red");

  const cycleLight = () => {
    if (color === "red") setColor("yellow");
    else if (color === "yellow") setColor("green");
    else if (color === "green") setColor("red");
  };

  return (
    <div className="traffic-light">
      {colors.map((c) => (
        <div
          key={c}
          className={color === c ? `light ${c} active` : `light ${c}`}
          onClick={() => setColor(c)}
        ></div>
      ))}

      <button onClick={cycleLight}>Next</button>
      <button onClick={() => setColors([...colors, "purple"])}>
        Add Purple
      </button>
    </div>
  );
};
