import React, { useState } from "react";

export const CharacterCount = () => {
  const [countChar, setCountChar] = useState(0);

  return (
    <div>
      <h1>Character Count</h1>
      <br />
      <input className ="todo input-box"
        onChange={(event) => setCountChar(180 - event.target.value.length)}
        placeholder="Type your text"
      />
      <p> Remaining characters - {countChar} </p>
      <br /><br />
    </div>
  );
}