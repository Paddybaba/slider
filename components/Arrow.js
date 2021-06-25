import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
const Arrow = ({ direction, handleClick }) => {
  var left;
  if (direction === "left") {
    left = 0;
  } else {
    left = 650;
  }
  const [myStyle, setStyle] = useState({
    display: `flex`,
    position: "absolute",
    top: `50%`,
    height: "50px",
    width: "50px",
    cursor: "pointer",
    alignItems: "center",
    transition: "transform ease-in 100ms",
    backgroundColor: "grey",
    color: "white",
    textAlign: "center",
    left: left,
    borderRadius: "50%",
  });

  return (
    <div
      onClick={handleClick}
      style={myStyle}
      onMouseOver={() => setStyle({ ...myStyle, backgroundColor: "black" })}
      onMouseLeave={() => setStyle({ ...myStyle, backgroundColor: "grey" })}
      transition={"all 200ms ease-in"}
    >
      {direction}
    </div>
  );
};

export default Arrow;
