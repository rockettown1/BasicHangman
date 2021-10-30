import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Let's play Hangman</h1>
      <p>Enter a letter...</p>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 0;
    color: white;
  }
`;
