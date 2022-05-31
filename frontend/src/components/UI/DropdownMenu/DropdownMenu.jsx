import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../Card";

const Menu = styled(Card)`
  z-index: 200;
  padding: 0;
`;

const DropdownMenu = (props) => {
  return props.open ? (
    <Menu className={props.className} onClick={props.onClick}>
      {props.children}
    </Menu>
  ) : null;
};

DropdownMenu.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default DropdownMenu;
