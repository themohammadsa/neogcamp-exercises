import React, { useState } from "react";

export const SimpleCounter = () => {
  const [countButton, setCountButton] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <button className="ctr" onClick={() => setCountButton(countButton + 1)}>
        {" "}
        +{" "}
      </button>
      {countButton}
      <button
        className="ctr"
        disabled={countButton === 0}
        onClick={() => setCountButton(countButton - 1)}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
};
