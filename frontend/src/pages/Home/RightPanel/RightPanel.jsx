import React from "react";
import Card from "../../../components/UI/Card";
import LessonTile from "../../../components/LessonTile/LessonTile";
import styled from "styled-components";
import PanelHeader from "../PanelHeader/PanelHeader";
import LessonList from "../LessonList/LessonList";
import dayjs from 'dayjs';

dayjs.locale("pl");

const StyledCard = styled(Card)`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border-radius: 12px;
  min-width: 300px;
  margin: 40px 0;
  @media screen and (max-width: 1024px) {
    margin: 0;
    width: 100%;
    max-width: 500px;
  }
`;

const RightPanel = (props) => {
  return (
    <StyledCard className={props.className}>
      <PanelHeader
        title="Jutro"
        primaryHeading={props.date?.format("dddd - DD.MM")}
        secondaryHeading={`Tydzień  ${
          props.date?.week?.() % 2 === 0 ? "Parzysty" : "Nieparzysty"
        }`}
      />
      <LessonList>
        {props.lessons?.map((lesson) => (
          <LessonTile
            lesson={lesson}
            alternative
            key={lesson.id}
            onClick={() => props.onLessonSelected(lesson)}
            selected={lesson.id === props.selectedLesson?.id}
          />
        ))}
        {(props.lessons === undefined || props.lessons.length === 0) && (
          <h1>Brak zajęć na ten dzień</h1>
        )}
      </LessonList>
      {/* Pusty div potrzebny żeby layout sie nie popsuł */}
      <div />
    </StyledCard>
  );
};

export default RightPanel;
