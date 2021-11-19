import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1px 8px;
`;

const Button = (props) => {
  return (
    <StyledButton className={props.className}>{props.children}</StyledButton>
  );
};

export default Button;
