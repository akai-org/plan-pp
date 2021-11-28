import React from "react";
import styled from "styled-components";
import Modal from "../UI/Modal/Modal";
import PropTypes from "prop-types";
import logo from "../../resources/AKAI-LOGO.png";
import Button from "../UI/Button";

const StyledModal = styled(Modal)`
  min-width: 320px;
`;

const LogoImg = styled.img`
  max-width: 150px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-family: "Roboto Slab", serif;
  font-size: 1.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0;
`;

const Input = styled.input`
  border-radius: 4px;
  border-width: 1px;
  width: 100%;
  padding: 2px;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

const LoginButton = styled(Button)`
  margin: 10px 0;
  min-width: 120px;
`;

const SmallText = styled.span`
  font-size: 0.8rem;
`;

const LoginModal = (props) => {
  return (
    <StyledModal open={props.open} onClose={props.onClose}>
      <FlexContainer>
        <LogoImg src={logo} />
        <Title>Logowanie</Title>
        <InputWrapper>
          <Label>Login:</Label>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <Label>Hasło:</Label>
          <Input />
        </InputWrapper>
        <LoginButton>Zaloguj się</LoginButton>
        <SmallText>Nie masz konta? Zarejestruj się</SmallText>
        <SmallText>Odzyskiwanie hasła</SmallText>
      </FlexContainer>
    </StyledModal>
  );
};

LoginModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default LoginModal;
