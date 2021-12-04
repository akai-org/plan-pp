import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal/Modal";
import PropTypes from "prop-types";
import logo from "../../resources/AKAI-LOGO.png";
import Button from "../UI/Button";
import { useForm } from "react-hook-form";

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

const MessageBox = styled.div`
  background: rgb(255, 199, 199);
  color: crimson;
  padding: 1em;
  border: 2px solid crimson;
  margin: 10px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const LoginButton = styled.input`
  margin: 10px 0;
  min-width: 120px;
  padding: 4px;
`;

const SmallText = styled.span`
  font-size: 0.8rem;
`;

const LoginModal = (props) => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    alert("logowanie");
    //Wysłanie zapytania do Api
  };

  return (
    <StyledModal
      open={props.open}
      onClose={props.onClose}
      className={props.className}
    >
      <FlexContainer>
        <LogoImg src={logo} />
        <Title>Logowanie</Title>
        {message && <MessageBox>{message}</MessageBox>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Label>Login:</Label>
            <Input {...register("login", { requred: true })} />
          </InputWrapper>
          <InputWrapper>
            <Label>Hasło:</Label>
            <Input {...register("password", { requred: true })} />
          </InputWrapper>
          <LoginButton type="submit" value="Zaloguj się" />
        </Form>
        <SmallText>
          Nie masz konta?{" "}
          <Button variant="link" onClick={props.onSwitchType}>
            Zarejestruj się
          </Button>
        </SmallText>
        <SmallText>Odzyskiwanie hasła</SmallText>
      </FlexContainer>
    </StyledModal>
  );
};

LoginModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSwitchType: PropTypes.func,
  className: PropTypes.string,
};

export default LoginModal;
