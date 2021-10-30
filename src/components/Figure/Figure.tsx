import styled from "styled-components";
import { WrongLettersProps } from "../../components/WrongLetters/WrongLetters";

const Figure = ({ wrongLetters }: WrongLettersProps) => {
  const err = wrongLetters.length;

  return (
    <Container data-testid="stickman">
      <svg>
        {/* Rod */}
        <line x1="60" y1="20" x2="140" y2="20" data-testid="stick" />
        <line x1="140" y1="20" x2="140" y2="50" data-testid="stick" />
        <line x1="60" y1="20" x2="60" y2="230" data-testid="stick" />
        <line x1="20" y1="230" x2="100" y2="230" data-testid="stick" />

        {err > 0 && <Head data-testid="head" cx="140" cy="70" r="20" />}

        {err > 1 && (
          <Body x1="140" y1="90" x2="140" y2="150" data-testid="stick" />
        )}

        {err > 2 && (
          <Arm
            x1="140"
            y1="120"
            x2="120"
            y2="100"
            side="left"
            data-testid="stick"
          />
        )}
        {err > 3 && (
          <Arm
            x1="140"
            y1="120"
            x2="160"
            y2="100"
            side="right"
            data-testid="stick"
          />
        )}

        {err > 4 && (
          <Leg
            data-testid="left-leg"
            x1="140"
            y1="150"
            x2="120"
            y2="180"
            side="left"
          />
        )}
        {err > 5 && (
          <Leg
            x1="140"
            y1="150"
            x2="160"
            y2="180"
            side="right"
            data-testid="stick"
          />
        )}
      </svg>
    </Container>
  );
};

export default Figure;

type LimbsProp = {
  side: string;
};
const Container = styled.div`
  svg {
    height: 250px;
    width: 200px;
    fill: transparent;
    stroke: #fff;
    stroke-width: 4px;
    stroke-linecap: round;
  }
`;
const Head = styled.circle``;

const Body = styled.line``;

const Arm = styled.line<LimbsProp>``;

const Leg = styled.line<LimbsProp>``;
