import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const NormalButton = styled.button`
  padding: 1px 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.button.background};
  border: 2px solid ${(props) => props.theme.colors.button.border};
  cursor: pointer;
`;

const LinkButton = styled.button`
  background: transparent;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.text.link};
  border: none;
  cursor: pointer;
`;

const Button = (props) => {
  if (props.variant === "link") {
    return <LinkButton {...props}>{props.children}</LinkButton>;
  }
  return <NormalButton {...props}>{props.children}</NormalButton>;
};

Button.propTypes = {
  variant: PropTypes.oneOf(["normal", "link"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
