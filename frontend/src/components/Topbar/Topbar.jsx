import React from "react";
import logo from "../../resources/AKAI-LOGO.png";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useMediaPredicate } from "react-media-hook";

import Clock from "./Clock/Clock";
import AccountIndicator from "./AccountIndicator/AccountIndicator";
import Button from "../UI/Button";

const LogoImg = styled.img`
  height: 100%;
  max-height: 80px;
`;

const Title = styled.span`
  font-family: "Roboto Slab", serif;
  font-size: 1.75em;
  font-weight: 300;

  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Bar = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 10px;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
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
  const overMediumSize = useMediaPredicate("(min-width: 900px)");
  const overSmallSize = useMediaPredicate("(min-width: 600px)");

  const indicatorOrLoginButton = props.loggedIn ? (
    <AccountIndicator includeMenu />
  ) : (
    <LoginButton onClick={props.onLoginClick}>Zaloguj się</LoginButton>
  );

  return (
    <Bar className={props.className}>
      <Logo>
        <LogoImg src={logo} />
        <Title>AKAI Plan Zajęć</Title>
      </Logo>
      {overMediumSize && <CenteredClock />}
      {overSmallSize && indicatorOrLoginButton}
    </Bar>
  );
};

Topbar.propTypes = {
  loggedIn: PropTypes.bool,
  onLoginClick: PropTypes.func,
  className: PropTypes.string,
};

export default Topbar;
