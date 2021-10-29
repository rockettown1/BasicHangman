import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Figure from "./components/Figure/Figure";
import WrongLetters from "./components/WrongLetters/WrongLetters";
import Word from "./components/Word/Word";
import Notification from "./components/Notification/Notification";
import Popup from "./components/Popup/Popup";
import { showNotification as show } from "./helpers/helpers";
import randomWords from "random-words";

let selectedWord = randomWords();

function App() {
  const [playable, setPlayable] = useState<boolean>(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyup = (event: KeyboardEvent) => {
      //comeback to this and change logic to replace deprecated keyCode property
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWord = randomWords();
  };

  return (
    <Container>
      <Header />
      <GameContainer>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </GameContainer>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #272838;
`;

const GameContainer = styled.div`
  padding: 20px 30px;
  position: relative;
  height: 450px;
  width: 650px;
`;
