import React from "react";
import logo from "../../resources/AKAI-LOGO.png";
import styled from "styled-components";
import PropTypes from "prop-types";

import Clock from "./Clock/Clock";
import AccountIndicator from "./AccountIndicator/AccountIndicator";
import Button from "../UI/Button";

const LogoImg = styled.img`
  height: 100%;
`;

const Title = styled.span`
  font-family: "Roboto Slab", serif;
  font-size: 1.75em;
  font-weight: 300;
`;

const Logo = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  height: 80px;
  min-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 10px;
`;

const CenteredClock = styled(Clock)`
  position: absolute;
  right: 50%;
  top: 14px;
  transform: translateX(50%);
`;

const LoginButton = styled(Button)`
  margin-right: 2em;
`;

const Topbar = (props) => {
  return (
    <Bar className={props.className}>
      <Logo>
        <LogoImg src={logo} />
        <Title>AKAI Plan Zajęć</Title>
      </Logo>
      <CenteredClock />
      {props.loggedIn ? (
        <AccountIndicator />
      ) : (
        <LoginButton>Zaloguj się</LoginButton>
      )}
    </Bar>
  );
};

Topbar.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Topbar;
