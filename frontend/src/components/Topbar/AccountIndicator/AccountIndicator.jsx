import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import DropdownMenu from "../../UI/DropdownMenu/DropdownMenu";
import DropdownMenuItem from "../../UI/DropdownMenu/DropdownMenuItem/DropdownMenuitem";
import {
  MdKeyboardArrowDown as iconDown,
  MdAccountBox as iconAccount,
  MdLogout as iconLogout,
  MdCalendarToday as iconCalendar,
  MdViewAgenda as iconAgenda,
} from "react-icons/md";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: auto-fill;
  align-items: center;
  text-align: right;
  column-gap: 10px;
`;

const UserName = styled.span`
  grid-column: 1/2;
  grid-row: 1/2;
  font-weight: 500;
  font-size: 1.3rem;
`;

const UserInfo = styled.span`
  grid-column: 1/2;
  grid-row: 2/3;
  font-size: 0.9rem;
`;

const IconDown = styled(iconDown)`
  grid-column: 2/3;
  grid-row: 1/3;
  justify-self: center;
  transform: scale(1.75);
  cursor: pointer;
`;

const Menu = styled(DropdownMenu)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(105%);
`;

const AccountIndicator = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Wrapper className={props.className}>
      <UserName>{props.user?.name}</UserName>
      <UserInfo>
        {props.user?.fieldOfStudy} sem. {props.user?.semester} gr.{" "}
        {props.user?.group}
      </UserInfo>
      {props.includeMenu && (
        <>
          <IconDown onClick={() => setMenuOpen(!menuOpen)} />
          <Menu open={menuOpen} onClick={() => setMenuOpen(false)}>
            <DropdownMenuItem
              label="Ustawienia konta"
              icon={iconAccount}
              onClick={() => navigate("/settings")}
            />
            <DropdownMenuItem
              label="Wyloguj"
              icon={iconLogout}
              onClick={props.onLogout}
            />
            <DropdownMenuItem
              label="Widok tygodnia"
              icon={iconCalendar}
              onClick={() => navigate("/week")}
            />
            <DropdownMenuItem
              label="Agenda"
              icon={iconAgenda}
              onClick={() => navigate("/")}
            />
          </Menu>
        </>
      )}
    </Wrapper>
  );
};
AccountIndicator.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    semester: PropTypes.number,
    fieldOfStudy: PropTypes.string,
    group: PropTypes.string,
  }),
  onLogout: PropTypes.func,
  includeMenu: PropTypes.bool,
};

AccountIndicator.defaultProps = {
  user: {
    name: "Jan Kowalski",
    semester: 2,
    fieldOfStudy: "Sztuczna Inteligencja",
    group: "SI 4",
  },
};

export default AccountIndicator;
