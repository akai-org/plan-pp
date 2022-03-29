import React, { useState } from "react";
import styled from "styled-components";
import {
  MdMenu,
  MdAccountBox as iconAccount,
  MdLogout as iconLogout,
  MdCalendarToday as iconCalendar,
  MdViewAgenda as iconAgenda,
} from "react-icons/md";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

import LoginPopup from "./LoginPopup/LoginPopup";
import theme from "../../theme";
import AccountIndicator from "../Topbar/AccountIndicator/AccountIndicator";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import DropdownMenuItem from "../UI/DropdownMenu/DropdownMenuItem/DropdownMenuItem";
import Overlay from "../UI/Modal/Overlay/Overlay";

const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  z-index: 20;
  background-color: white;
  box-shadow: ${theme.boxShadow.large};
`;

const MenuIcon = styled(MdMenu)`
  font-size: 2rem;
`;

const Menu = styled(DropdownMenu)`
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
`;

const MenuItem = styled(DropdownMenuItem)`
  padding-left: 25px;
`;

const MobileBar = (props) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const bar = (
    <Bar className={props.className}>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
      <Menu open={menuOpen} onClick={() => setMenuOpen(false)}>
        <MenuItem
          label="Widok tygodnia"
          icon={iconCalendar}
          onClick={() => navigate("/week")}
          noBorder
        />
        <MenuItem
          label="Agenda"
          icon={iconAgenda}
          onClick={() => navigate("/")}
          noBorder
        />
        <MenuItem
          label="Ustawienia konta"
          icon={iconAccount}
          onClick={() => navigate("/settings")}
        />
        <MenuItem
          label="Wyloguj"
          icon={iconLogout}
          onClick={props.onLogout}
          noBorder
        />
      </Menu>
      <AccountIndicator includeMenu={false} />
    </Bar>
  );

  return (
    <>
      {props.loggedIn ? bar : <LoginPopup onLoginClick={props.onLoginClick} />}
      {menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
    </>
  );
};

MobileBar.propTypes = {
  loggedIn: PropTypes.bool,
  onLoginClick: PropTypes.func,
  className: PropTypes.string,
  onLogoue: PropTypes.string,
};

export default MobileBar;
