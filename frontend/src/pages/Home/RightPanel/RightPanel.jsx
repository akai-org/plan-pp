import React from "react";
import Card from "../../../components/UI/Card";
import LessonTile from "../../../components/LessonTile/LessonTile";
import styled from "styled-components";
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
        primaryHeading={props.date.locale("pl").format("dddd - DD.MM")}
        secondaryHeading={`Tydzień  ${
          props.date.week() % 2 === 0 ? "Parzysty" : "Nieparzysty"
        }`}
      />
      <LessonList>
        {props.lessons?.map((lesson) => (
          <LessonTile
            name={lesson.name}
            classroom={lesson.classroom}
            start={lesson.start_hour + ":" + lesson.start_minutes}
            end={lesson.end_hour + ":" + lesson.end_minutes}
            alternative
            key={lesson.id}
            onClick={() => props.onLessonSelected(lesson)}
            selected={lesson.id === props.selectedLesson?.id}
          />
        ))}
      </LessonList>
      {/* Pusty div potrzebny żeby layout sie nie popsuł */}
      <div />
    </StyledCard>
  );
};

export default RightPanel;
