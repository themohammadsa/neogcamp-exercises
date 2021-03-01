import React, { useState } from "react";
import eye from "/src/components/PasswordMatch/eye.png";
import invisible from "/src/components/PasswordMatch/invisible.png";

export const PasswordMatch = () => {
  const [password, setPassword] = useState(0);
  const [passMatch, setPassMatch] = useState("");
  const [showSubmit, setShowSubmit] = useState(true);
  const [showPass, setShowPass] = useState("password");
  const [passIcon, setPassIcon] = useState(eye);

  function hideHandler() {
    if (showPass === "password") {
      setShowPass("text");
      setPassIcon(invisible);
    } else {
      setShowPass("password");
      setPassIcon(eye);
    }
  }

  return (
    <div>
      <h1>Password Match </h1>
      <input
        class="password-child1 input-box"
        type={showPass}
        onChange={(event) => {
          setPassword(event.target.value);
          setPassMatch("");
        }}
        placeholder="Password"
      />
      <img
        src={passIcon}
        id="password-img"
        width="20px"
        alt="password-icon"
        onClick={hideHandler}
      />
      <br /> <br />
      <input
        className="password-child2 input-box"
        type={showPass}
        onChange={(event) => {
          let digit = /\d/;
          var confirmPass = event.target.value;

          if (confirmPass === password && confirmPass.match(digit)) {
            setPassMatch("Password Matches");
            setShowSubmit(false);
          } else if (confirmPass !== password && confirmPass !== "") {
            setPassMatch("Password does not match");
            setShowSubmit(true);
          } else if (!confirmPass.match(digit) && confirmPass !== "")
            setPassMatch("Please use an alphanumeric password.");
          else {
            setPassMatch("");
            setShowSubmit(true);
          }
        }}
        placeholder="Confirm Password"
      />
      <img src={passIcon} id="password-img" width="20px" />
      <br /> <br />
      <p style={{ color: "red", fontWeight: "bolder" }}> {passMatch} </p>
      <button
        className="ctr"
        disabled={showSubmit}
        onClick={() => console.log(password)}
      >
        {" "}
        Submit{" "}
      </button>
      <p>Note:  Press Submit Button and if password matches, it is printed on the console. If it doesn't match, the Submit button is disabled.  </p> <br />
    </div>
  );
};
