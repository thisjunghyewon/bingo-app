// BingoCell.jsx
import Ink from "react-ink";

const BingoCell = ({ phrase, onClick, active, win, fixedSize }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className={`bingo-cell ${active ? "active" : ""} ${
        fixedSize ? "bingo-cell-size" : ""
      }`}
      onClick={handleClick}
    >
      <div className={`bingo-cell-span ${win ? "win" : ""}`}>
        <span>{phrase}</span>
        <Ink />
      </div>
    </div>
  );
};

export default BingoCell;
