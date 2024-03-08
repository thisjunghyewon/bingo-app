import React from "react";
import "./styles/_main.scss";
import BingoCard from "./components/BingoCard";

const App = () => {
  return (
    <>
      <div className="appContainer">
        <div className="App-wrapper">
          <BingoCard />
        </div>
      </div>
    </>
  );
};

export default App;
