import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown as iconDown } from "react-icons/md";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 25px;
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
`;

const AccountIndicator = (props) => {
  return (
    <Wrapper className={props.className}>
      <UserName>Jan Kowalski</UserName>
      <UserInfo>Sztuczna Inteligencja sem. I gr. 2</UserInfo>
      <IconDown />
    </Wrapper>
  );
};

export default AccountIndicator;
