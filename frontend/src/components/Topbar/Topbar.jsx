import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Clock from "./Clock/Clock";
import AccountIndicator from "./AccountIndicator/AccountIndicator";
import Button from "../UI/Button";
import logo from "../../resources/AKAI-LOGO.png";

const smallDeviceTreshold = '640px';
const mediumDeviceTreshold = '900px';

const LogoImg = styled.img`
  height: 80px;
`;

const Title = styled.span`
  font-family: "Roboto Slab", serif;
  font-size: 1.75em;
  font-weight: 300;

  @media screen and (max-width: ${smallDeviceTreshold}) {
    font-size: 1.1rem;
  }
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-self: left;
  grid-area: logo;

  @media screen and (max-width: ${smallDeviceTreshold}) {
    flex-direction: column;
    grid-column: 2;
  }
`;

const Bar = styled.div`
  min-height: 80px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: 'logo clock account';
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 10px;

  @media screen and (max-width: ${smallDeviceTreshold}) {
    justify-content: center;
    grid-template-areas: '. logo .';
  }
`;

const CenteredClock = styled(Clock)`
  grid-area: clock;

  @media screen and (max-width: ${mediumDeviceTreshold}) {
    display: none;
  }
`;

const AccountIndicatorWrapper = styled.div`
  justify-self: right;
  grid-area: account;

  @media screen and (max-width: ${smallDeviceTreshold}) {
    display: none;
  }
`;

const LoginButton = styled(Button)`
  margin-right: 2em;
`;

const Topbar = (props) => {
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
      <CenteredClock />
      <AccountIndicatorWrapper>
        {indicatorOrLoginButton}
      </AccountIndicatorWrapper>
    </Bar>
  );
};

Topbar.propTypes = {
  loggedIn: PropTypes.bool,
  onLoginClick: PropTypes.func,
  className: PropTypes.string,
};

export default Topbar;
