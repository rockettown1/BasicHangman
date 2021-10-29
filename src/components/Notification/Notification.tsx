import styled from "styled-components";

interface IShowNotification {
  showNotification: boolean;
}

const Notification = ({ showNotification }: IShowNotification) => {
  return (
    <Container data-testid="notif" show={showNotification}>
      <p>You have already entered this letter</p>
    </Container>
  );
};

export default Notification;

type ContainerProps = {
  show: boolean;
};

const Container = styled.div<ContainerProps>`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0 0;
  padding: 15px 20px;
  position: absolute;
  bottom: -50px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ show }) => (show ? "translateY(-50px)" : "translateY(0px)")};
  p {
    margin: 0;
  }
`;
