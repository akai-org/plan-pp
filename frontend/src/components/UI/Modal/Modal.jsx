import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Overlay from "./Overlay/Overlay";

const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  padding: 2em;
  z-index: 200;
`;

const Modal = (props) => {
  return props.open ? (
    <>
      <ModalWindow className={props.className}>{props.children}</ModalWindow>
      <Overlay onClick={props.onClose} />
    </>
  ) : null;
};

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Modal;
