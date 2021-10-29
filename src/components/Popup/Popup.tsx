import styled from "styled-components";
import { checkWin } from "../../helpers/helpers";
import { useEffect } from "react";

interface PopupProps {
  correctLetters: string[];
  wrongLetters: string[];
  selectedWord: string;
  setPlayable: React.Dispatch<React.SetStateAction<boolean>>;
  playAgain: () => void;
}

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}: PopupProps) => {
  let finalMessage = "";
  let playable = true;

  switch (checkWin(correctLetters, wrongLetters, selectedWord)) {
    case "win":
      finalMessage = "Congrats";
      playable = false;
      break;
    case "lose":
      finalMessage = "Unfortunately, you lost!";
      playable = false;
      break;
    default:
      break;
  }

  useEffect(() => setPlayable(playable));

  return (
    <Container show={finalMessage !== ""}>
      <div>
        <h2>{finalMessage}</h2>
        {!playable && (
          <h3>
            The word was{" "}
            <span style={{ color: "#272838" }}>{selectedWord}</span>
          </h3>
        )}
        <button onClick={playAgain}>Play Again</button>
      </div>
    </Container>
  );
};

export default Popup;

type ContainerProps = {
  show: boolean;
};

const Container = styled.div<ContainerProps>`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  div {
    background: #7d6b91;
    color: white;
    border-radius: 5px;
    box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
    padding: 40px;
    text-align: center;

    button {
      cursor: pointer;
      background-color: #fff;
      color: #272838;
      border: 0;
      margin-top: 20px;
      padding: 12px 20px;
      font-size: 16px;
      &:active {
        transform: scale(0.98);
      }
      &::focus {
        outline: 0;
      }
    }
  }
`;
