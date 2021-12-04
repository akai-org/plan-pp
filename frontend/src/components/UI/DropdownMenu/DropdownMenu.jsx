import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../Card";

const Menu = styled(Card)`
  z-index: 10;
  padding: 0;
`;

const DropdownMenu = (props) => {
  return props.open ? (
    <Menu className={props.className}>{props.children}</Menu>
  ) : null;
};

DropdownMenu.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default DropdownMenu;
