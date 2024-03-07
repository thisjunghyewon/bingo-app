import { useCallback, useState } from "react";
import { phrases } from "../utilities/Phrases";

const useCardPhrases = () => {
  const [cardPhrases, setCardPhrases] = useState([]);

  const generateRandomCard = useCallback(() => {
    const shuffledPhrases = phrases.sort(() => 0.5 - Math.random());
    const selectedPhrases = shuffledPhrases.slice(0, 24);
    selectedPhrases.splice(12, 0, "💬");
    setCardPhrases(selectedPhrases);
  }, []);

  return { cardPhrases, generateRandomCard };
};

export default useCardPhrases;
