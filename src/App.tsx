import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Figure from "./components/Figure/Figure";
import WrongLetters from "./components/WrongLetters/WrongLetters";
import Word from "./components/Word/Word";
import Notification from "./components/Notification/Notification";
import Popup from "./components/Popup/Popup";
import { showNotification as show } from "./helpers/helpers";
import randomWords from "random-words";
import { useWindowSize } from "./hooks/useWindowSize";

let selectedWord = randomWords();

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [playable, setPlayable] = useState<boolean>(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const { width } = useWindowSize();

  useEffect(() => {
    inputRef.current?.focus();

    const handleKeyup = (event: any) => {
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

    //event on hidden input to mobile keyboard always open
    inputRef.current!.addEventListener("keyup", handleKeyup);

    //focus trap
    window.addEventListener("click", () => {
      inputRef.current?.focus();
    });

    return () => inputRef.current!.removeEventListener("keyup", handleKeyup);
  }, [correctLetters, wrongLetters, playable, width]);

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
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
      </GameContainer>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
      <HiddenInput type="text" ref={inputRef} />
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
  @media screen and (max-width: 750px) {
    width: 100vw;
    height: auto;
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  font-size: 20px;
  top: 0;
  left: 0;
  opacity: 0.1;
`;
