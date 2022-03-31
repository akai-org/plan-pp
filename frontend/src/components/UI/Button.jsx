import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";

const buttonHoverTransistion = 'background-color 0.25s, box-shadow 0.25s';
const transparentButtonHoverBgColor = 'rgba(0, 0, 0, 0.08)';
const transparentButtonActiveBgColor = 'rgba(0, 0, 0, 0.15)';
const transparentButtonActiveBoxShadow = '0 -1px 2px 0 rgb(0 0 0 / 15%) inset';

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
  cursor: pointer;
  background: transparent;
  display: inline-flex;
  gap: 4px;
  color: ${(props) => theme.colors.text.primary};
  border: none;
  align-items: center;
  padding: 4px 8px;
  transition: ${buttonHoverTransistion};

  &:not(:disabled){
    &:hover {
      background-color: ${transparentButtonHoverBgColor};
    }
    &:active {
      background-color: ${transparentButtonActiveBgColor};
      box-shadow: ${transparentButtonActiveBoxShadow};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const IconButton = styled(TransparentButton)`
  box-sizing: content-box;
  line-height: 1;
  width: 1em;
  height: 1em;
  padding: 4px;
  border-radius: 50%;
  transition: ${buttonHoverTransistion};
`;

const Button = (props) => {
  switch (props.variant) {
    case "link":
      return <LinkButton {...props}>{props.children}</LinkButton>;
    case "transparent":
      return <TransparentButton {...props}>{props.children}</TransparentButton>;
    case "icon":
      return <IconButton {...props}><props.icon /></IconButton>
    default:
      return <NormalButton {...props}>{props.children}</NormalButton>;
  }
};

Button.propTypes = {
  variant: PropTypes.oneOf(["normal", "link", "transparent", "icon"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
