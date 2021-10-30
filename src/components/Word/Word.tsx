import styled from "styled-components";

interface WordProps {
  selectedWord: string;
  correctLetters: string[];
}

const Word = ({ selectedWord, correctLetters }: WordProps) => {
  return (
    <Container data-testid="word">
      {selectedWord.split("").map((letter, index) => {
        return (
          <span data-testid="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </Container>
  );
};

export default Word;

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  span {
    border-bottom: 3px solid #2980b9;
    display: inline-flex;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    margin: 0 3px;
    height: 50px;
    width: 20px;
  }
  @media screen and (max-width: 750px) {
    position: relative;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
