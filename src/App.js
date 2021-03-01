import "./styles.css";
import { useState } from "react";

import {
  SimpleCounter,
  CharacterCount,
  PasswordMatch,
  DesignerTool,
  DarkMode,
  Cart,
  ToDo,
  SwitchTabs,
  Toast,
  LikeList
} from "./components";

export default function App() {
  const [tab, setTab] = useState(<SimpleCounter />);

  return (
    <div className="App">
      <div className="nav-bar">
        <button className="drop"> Select Exercise</button>
        <div className="drop-down">
          <div
            className="drop-down-items"
            onClick={() => setTab(<SimpleCounter />)}
          >
            {" "}
            Counter{" "}
          </div>
          <div className="drop-down-items" onClick={() => setTab(<ToDo />)}>
            {" "}
            ToDo
          </div>
          <div
            className="drop-down-items"
            onClick={() => setTab(<CharacterCount />)}
          >
            {" "}
            Character Count
          </div>
          <div
            className="drop-down-items"
            onClick={() => setTab(<PasswordMatch />)}
          >
            {" "}
            Password Checker
          </div>
          <div
            className="drop-down-items"
            onClick={() => setTab(<DesignerTool />)}
          >
            {" "}
            Designer Tool
          </div>
          <div className="drop-down-items" onClick={() => setTab(<Cart />)}>
            {" "}
            Shopping Cart
          </div>
          <div className="drop-down-items" onClick={() => setTab(<Toast />)}>
            {" "}
            Toast
          </div>
          <div className="drop-down-items" onClick={() => setTab(<LikeList />)}>
            {" "}
            LikeList
          </div>
          <div className="drop-down-items" onClick={() => setTab(<DarkMode />)}>
            {" "}
            Dark Mode
          </div>
        </div>
      </div>

      <div className="box">{tab}</div>
    </div>
  );
}
