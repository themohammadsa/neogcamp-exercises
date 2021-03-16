import { useState } from "react";
import "./toast.css";

export const Toast = () => {
  const [toast, setToast] = useState("none");
  return (
    <div>
      <h1>Toast </h1>
      <button className="ctr" onClick={() => setToast("block")}>
        Click Me!{" "}
      </button>
      <div className="toast" style={{ display: toast }}>
        <span onClick={() => setToast("none")} id="close">
          &times;
        </span>
        <p id="toast-text">This is a toast. </p>
      </div>
      <br />
    </div>
  );
};
