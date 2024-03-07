// BingoCard.jsx

import { useState, useEffect, useRef, useCallback } from "react";
import BingoCell from "./BingoCell";
import ParticleAnimation from "../animations/ParticleAnimation";

import useCardPhrases from "../hooks/useCardPhrases";

const BingoCard = () => {
  const { cardPhrases, generateRandomCard } = useCardPhrases();
  const [cells, setCells] = useState(Array(25).fill(false));
  const [winLines, setWinLines] = useState([]);
  const prevWinLinesLengthRef = useRef(0);

  //Function to toggle cell
  const toggleCell = (index) => {
    if (index === 12) return;
    const newCells = [...cells]; //Create a copy of the cells array using the spread operator [...cells]. This allows us to work with the copy without modifying the original array.
    newCells[index] = !newCells[index]; //Toggle the selected cell's status: select if unselected, deselect if selected.
    setCells(newCells); //Update the state with the new cell array to refresh
  };

  const checkBingo = useCallback(() => {
    const lines = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    //Determining the activation status of a given array of cells and the winning conditions
    const winningLines = lines.filter(
      (line) => line.every((index) => cells[index] || index === 12) //Returns true if the cell currently being examined is filled (if cells[index] is true), or also true if the cell is empty but is the centre cell (if index === 12 is true)
    );
    return winningLines;
  }, [cells]);

  //Update winLines state when cells state or checkBingo function changes
  useEffect(() => {
    const newWinLines = checkBingo();
    setWinLines(newWinLines);
  }, [cells, checkBingo]);

  useEffect(() => {
    prevWinLinesLengthRef.current = winLines;
  }, [winLines]);

  //Call a random bingo card every time the component is rendered/mounted
  useEffect(() => {
    generateRandomCard();
  }, [generateRandomCard]);

  return (
    <>
      <div className="bingo-wrapper">
        <div className="bingo-container">
          <div className={`bingo-card ${winLines.length > 0 ? "win" : ""}`}>
            {cardPhrases.map((phrase, index) => (
              <BingoCell
                key={index}
                phrase={phrase}
                onClick={() => toggleCell(index)}
                active={index === 12 || cells[index]}
                win={winLines.some((line) => line.includes(index))}
              />
            ))}
          </div>
        </div>
      </div>
      {winLines.length > 0 && (
        <>
          <div key={winLines.length}>
            <ParticleAnimation show={winLines.length > 0} />
          </div>
        </>
      )}
    </>
  );
};

export default BingoCard;
