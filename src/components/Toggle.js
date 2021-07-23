import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isON) => !isOn)
  };

  const color = isOn ? "red" : "tan";

  return <button onClick={handleClick} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;
};

export default Toggle;
