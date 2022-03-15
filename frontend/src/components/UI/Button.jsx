import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";

const NormalButton = styled.button`
  padding: 1px 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.button.background};
  border: 2px solid ${(props) => props.theme.colors.button.border};
  cursor: pointer;
  @media screen and (max-width: 600px) {
    padding: 8px 12px;
    border-radius: 12px;
  }
`;

const LinkButton = styled.button`
  background: transparent;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.text.link};
  border: none;
  cursor: pointer;
`;

const TransparentButton = styled.button`
  background: transparent;
  display: inline-flex;
  color: ${(props) => theme.colors.text.primary};
  border: none;
  align-items: center;
  padding: 4px 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    color: gray;
    &:hover {
      background-color: transparent;
    }
  }
`;

const Button = (props) => {
  switch (props.variant) {
    case "link":
      return <LinkButton {...props}>{props.children}</LinkButton>;
    case "transparent":
      return <TransparentButton {...props}>{props.children}</TransparentButton>;
    default:
      return <NormalButton {...props}>{props.children}</NormalButton>;
  }
};

Button.propTypes = {
  // variant: PropTypes.oneOf(["normal", "link"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
