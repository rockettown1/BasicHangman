import styled from "styled-components";

export interface WrongLettersProps {
  wrongLetters: string[];
}

const WrongLetters = ({ wrongLetters }: WrongLettersProps) => {
  return (
    <Container data-testid="wrongbox">
      <Letters>
        <p>Wrong Letters</p>
        {wrongLetters
          .map((letter, index) => (
            <span data-testid="wrong" key={index}>
              {letter}
            </span>
          ))
          .reduce(
            (prev: any, curr: JSX.Element) =>
              prev === null ? [curr] : [prev, ", ", curr],
            null
          )}
      </Letters>
    </Container>
  );
};

export default WrongLetters;

const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  padding: 30px;
  box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  flex-direction: column;
  text-align: right;
  p {
    margin: 0 0 5px;
  }
  span {
    font-size: 24px;
  }
  @media screen and (max-width: 750px) {
    position: relative;
    top: 0;
    right: 0;
  }
`;

const Letters = styled.div``;
