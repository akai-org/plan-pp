import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1px 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.button.background};
  border: 2px solid ${(props) => props.theme.colors.button.border};
`;

const Button = (props) => {
  return (
    <StyledButton className={props.className}>{props.children}</StyledButton>
  );
};

export default Button;
