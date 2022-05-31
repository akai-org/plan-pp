import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaPredicate } from "react-media-hook";

import Button from "../UI/Button";
import Modal from "../UI/Modal/Modal";
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

const SignupButton = styled.input`
  margin: 20px 0;
  min-width: 150px;
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

const InputMsg = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text.error};
  max-width: 300px;
  margin-top: 1px; /*inaczej styka się z inputem */
`;

const schema = yup
  .object({
    login: yup
      .string()
      .required("To pole jest wymagane")
      .min(3, "Login musi mieć co najmniej 3 znaki"),
    password: yup
      .string()
      .required("To pole jest wymagane")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Hasło musi zawierać wielkie i małe litery, cyfrę oraz symbol"
      ),
    passwordRepeat: yup
      .string()
      .required("To pole jest wymagane")
      .oneOf([yup.ref("password"), null], "Hasło powtórzone niepoprawnie"),
  })
  .required();

const SignupModal = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [message, setMessage] = useState("");
  const overSmallSize = useMediaPredicate("(min-width: 600px)");

  const onSubmit = (data) => {
    alert("Zakładanie konta");
  };

  return (
    <StyledModal
      open={props.open}
      onClose={props.onClose}
      className={props.className}
    >
      <FlexContainer>
        {overSmallSize && <LogoImg src={logo} />}
        <Title>Rejestracja</Title>
        {message && <MessageBox>{message}</MessageBox>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Label>Login:</Label>
            <Input {...register("login")} />
            <InputMsg>{errors.login?.message}</InputMsg>
          </InputWrapper>
          <InputWrapper>
            <Label>Hasło:</Label>
            <Input type="password" {...register("password")} />
            <InputMsg>{errors.password?.message}</InputMsg>
          </InputWrapper>
          <InputWrapper>
            <Label>Powtórz hasło:</Label>
            <Input type="password" {...register("passwordRepeat")} />
            <InputMsg>{errors.passwordRepeat?.message}</InputMsg>
          </InputWrapper>
          <SignupButton type="submit" value="Załóż konto" />
        </Form>
        <SmallText>
          Masz już konto?{" "}
          <Button variant="link" onClick={props.onSwitchType}>
            Przejdź do logowania
          </Button>
        </SmallText>
      </FlexContainer>
    </StyledModal>
  );
};

SignupModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSwitchType: PropTypes.func,
  className: PropTypes.string,
};

export default SignupModal;
