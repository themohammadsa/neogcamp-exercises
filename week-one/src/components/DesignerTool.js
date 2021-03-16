import React, { useState } from "react";

export const DesignerTool = () => {
  const [textSize, setTextSize] = useState("16px");

  return (
    <div>
      <h1>Designer Tool</h1>
      <button  className="ctr" onClick={() => setTextSize(parseInt(textSize) + 4 + "px")}>
        {" "}
        +{" "}
      </button>
      <span style={{ fontSize: textSize }}>The size of the text is {textSize}.</span>
      <button className="ctr"
        disabled={textSize === "12px"}
        onClick={() => setTextSize(parseInt(textSize) - 4 + "px")}
      >
        {" "}
        -{" "}
      </button>{" "}
    </div>
  );
};
