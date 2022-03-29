import React, {useEffect} from "react";
import styled from "styled-components";
import { MdArrowBack } from "react-icons/md";
import PropTypes from "prop-types";

import logo from "../../../../resources/AKAI-LOGO.png";

const Overlay = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  z-index: 30;
`;

const IconBack = styled(MdArrowBack)`
  transform: scale(2.5);
  position: absolute;
  top: 40px;
  left: 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;

const LogoImg = styled.img`
  max-height: 80px;
`;

const LogoTitle = styled.span`
  font-family: "Roboto Slab";
  font-size: 1.1rem;
  font-weight: 300;
`;

const MobileOverlay = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "unset";
  }, []);
  return (
    <Overlay className={props.className} onClick={e => e.stopPropagation()}>
      <IconBack onClick={props.onClick} />
      <LogoWrapper>
        <LogoImg src={logo} />
        <LogoTitle>AKAI Plan Zajęć</LogoTitle>
      </LogoWrapper>
      {props.children}
    </Overlay>
  );
};

MobileOverlay.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default MobileOverlay;
