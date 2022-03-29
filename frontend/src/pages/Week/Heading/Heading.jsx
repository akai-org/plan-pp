import React from "react";
import styled from "styled-components";
import {
  MdViewAgenda as IconAgenda,
  MdAdd as IconPlus,
  MdCompareArrows as IconCompare,
  MdFileDownload as IconDownload,
} from "react-icons/md";
import { useNavigate  } from "react-router";

import WeekSwitcher from "../WeekSwitcher/WeekSwitcher";
import Button from "../../../components/UI/Button";
import theme from "../../../theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  padding: 0 1em;
`;

const FloatingButtonGroup = styled.div`
  background-color: white;
  padding: 4px;
  box-shadow: ${(props) => theme.boxShadow.small};
  border-radius: 4px;
`;

const Heading = (props) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <FloatingButtonGroup>
        <Button variant="transparent" onClick={() => navigate("home")}><IconAgenda />Wróć do agendy</Button>
        <Button variant="transparent" disabled><IconPlus />Dodaj zajęcia</Button>
      </FloatingButtonGroup>

      <WeekSwitcher onWeekChanged={props.onWeekChanged}/>

      <FloatingButtonGroup>
        <Button variant="transparent" disabled><IconCompare />Porównaj plany</Button>
        <Button variant="transparent" disabled><IconDownload />Pobierz jako PDF</Button>
      </FloatingButtonGroup>
    </Wrapper>
  );
};

export default Heading;
