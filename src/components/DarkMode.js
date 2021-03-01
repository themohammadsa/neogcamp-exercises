import React, { useState } from "react";

export const DarkMode = () => {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("");

  console.log(toggle);
  console.log(color);

  function colorFunction() {
    if (toggle) setColor("#696969");
    else setColor("white");
    setToggle(!toggle);
  }

  return (
    <div style={{ backgroundColor: color }}>
      <h1> Dark Mode </h1>
      <button className="ctr" onClick={() => colorFunction()}> Toggle </button>
    </div>
  );
};
