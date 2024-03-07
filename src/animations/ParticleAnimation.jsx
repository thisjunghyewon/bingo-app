import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const ConfettiDisplay = ({ show }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [show]);

  const style = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    display: visible ? "block" : "none",
  };

  return (
    <div
      className={visible ? "show" : "hide"}
      style={style}
      onClick={() => setVisible(false)}
    />
  );
};

export default ConfettiDisplay;
