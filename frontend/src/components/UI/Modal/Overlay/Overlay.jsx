import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledOverlay = styled.div`
  background-color: ${(props) => props.theme.colors.overlay.background};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Overlay = (props) => {
  return <StyledOverlay {...props} />;
};

Overlay.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Overlay;
