import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMediaPredicate } from "react-media-hook";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button";
import logo from "../../resources/AKAI-LOGO.png";

const StyledModal = styled(Modal)`
  min-width: 320px;
`;

const LogoImg = styled.img`
  max-width: 150px;
  margin: auto;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: strech;
`;

const Title = styled.h4`
  font-family: "Roboto Slab", serif;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
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
  margin: 8px 0;
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #999;
  width: 100%;
  padding: 6px 4px;
  margin-top: 4px;

  @media screen and (max-width: 900px) {
    padding: 8px 4px;
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

const LoginButton = styled.input`
  margin: 20px 0;
  min-width: 120px;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #999;

  @media screen and (max-width: 600px) {
    min-width: 150px;
  }
`;

const SmallText = styled.span`
  font-size: 0.8rem;
  text-align: center;
`;

const LoginModal = (props) => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");
  const overSmallSize = useMediaPredicate("(min-width: 600px)");

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
        {overSmallSize && <LogoImg src={logo} />}
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
