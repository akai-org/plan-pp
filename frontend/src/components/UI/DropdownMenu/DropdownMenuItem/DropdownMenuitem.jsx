import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 1.1rem;
  gap: 5px;
  border-bottom: ${(props) => (props.noBorder ? "none" : "1px solid #ccc")};
  cursor: pointer;
  transition: all 200ms ease;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.span`
  scale: 1.25;
  transform: translateY(2px);
`;

const DropdownMenuItem = (props) => {
  return (
    <Item {...props}>
      <IconWrapper>
        <props.icon />
      </IconWrapper>
      {props.label}
    </Item>
  );
};

DropdownMenuItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  noBorder: PropTypes.bool,
};

export default DropdownMenuItem;
