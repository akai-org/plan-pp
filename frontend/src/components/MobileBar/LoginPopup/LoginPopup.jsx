import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import Button from "../../UI/Button";
import theme from "../../../theme";

const Popup = styled.div`
  position: fixed;
  background: white;
  bottom: 1em;
  left: 2em;
  right: 2em;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 10em;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.3);
  border: 1px solid lightgray;
`;

const Title = styled.h4`
  font-family: "Roboto Slab", serif;
  font-size: 1.5rem;
`;

const Message = styled.p`
  color: ${(props) => theme.colors.text.secondary};
  text-align: center;
  margin: 10px 0;
`;

const LoginPopup = (props) => {
  return (
    <Popup className={props.className}>
      <Title>Logowanie</Title>
      <Message>Zaloguj się, aby łatwo wracać do swojego planu</Message>
      <Button onClick={props.onLoginClick}>Zaloguj się</Button>
    </Popup>
  );
};

LoginPopup.propTypes = {
  className: PropTypes.string,
  onLoginClick: PropTypes.func
};

export default LoginPopup;
