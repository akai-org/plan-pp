import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import "dayjs/locale/pl";

import Card from "../../../components/UI/Card";
import Button from "../../../components/UI/Button";
import LessonTile from "../../../components/LessonTile/LessonTile";
import PanelHeader from "../PanelHeader/PanelHeader";
import LessonList from "../LessonList/LessonList";

const StyledCard = styled(Card)`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border-radius: 12px;
  min-height: 500px;
  min-width: 300px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
  }
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

const MainCard = (props) => {
  const navigate = useNavigate();

  return (
    <StyledCard className={props.className}>
      <PanelHeader
        title="Dzisiaj"
        primaryHeading={props.date.locale("pl").format("dddd - DD.MM")}
        secondaryHeading={`Tydzień  ${
          props.date.week() % 2 === 0 ? "Parzysty" : "Nieparzysty"
        }`}
      />
      <LessonList>
        {props.lessons?.map((lesson) => (
          <LessonTile
            lesson={lesson}
            key={lesson.id}
            onClick={() => props.onLessonSelected(lesson)}
            selected={lesson.id === props.selectedLesson?.id}
          />
        ))}
        {(props.lessons === undefined || props.lessons.length === 0) && (
          <h1>Brak zajęć na ten dzień</h1>)}
      </LessonList>
      <StyledButton onClick={() => navigate("/week")}>
        Zobacz pełny plan na tydzień
      </StyledButton>
    </StyledCard>
  );
};

export default MainCard;
