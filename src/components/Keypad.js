import React from "react";

function Keypad() {
  return (
    <input
      type="password"
      onChange={() => console.log("Entering password...")}
      placeholder="Enter password"
    ></input>
  );
}

export default Keypad;
