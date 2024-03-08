// BingoCell.jsx
import React, { useState } from "react";
import Ink from "react-ink";

const BingoCell = ({ phrase, onClick, active, win, fixedSize }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onClick();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bingo-cell ${active ? "active" : ""} ${
        fixedSize ? "bingo-cell-size" : ""
      }${isHovered ? "pulse" : ""}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`bingo-cell-span ${win ? "win" : ""}`}>
        <span>{phrase}</span>
        <Ink />
      </div>
    </div>
  );
};

export default BingoCell;
