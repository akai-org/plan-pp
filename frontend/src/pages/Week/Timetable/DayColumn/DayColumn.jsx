import React from "react";
import styled from "styled-components";
import "dayjs/locale/pl";

import LessonTile from "../../../../components/LessonTile/LessonTile";
import LessonDetailCard from "../../../../components/LessonDetailCard/LessonDetailCard";

export const HOUR_HEIGHT_PX = 50;

const Column = styled.div``;

const Header = styled.div`
  text-align: center;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: capitalize;
`;

const Schedule = styled.div`
  min-height: ${(props) => 13 * HOUR_HEIGHT_PX}px;
  position: relative;
`;

const PositionedTile = styled(LessonTile)`
  position: absolute;
  top: ${(props) =>
    (props.hours_start - 8 + props.minutes_start / 60) * HOUR_HEIGHT_PX}px;
  height: ${(props) =>
    (props.hours_end -
      props.hours_start +
      (props.minutes_end - props.minutes_start) / 60) *
    HOUR_HEIGHT_PX}px;
  left: 0;
  right: 0;
`;

const LessonDetailPopup = styled(LessonDetailCard)`
  position: absolute;
  z-index: 10;
  left: ${(props) => (props.position === "left" ? undefined : 0)};
  right: ${(props) => (props.position === "left" ? 0 : undefined)};
  top: ${(props) =>
    Math.min(
      (props.hours_start - 8 + props.minutes_start / 60) * HOUR_HEIGHT_PX,
      300
    )}px;
  transform: scale(0.9)
    translate(${(props) => (props.position === "left" ? -70 : 70)}%, -20%);
  width: 360px;
`;

const matchingWeek = (lesson, weekParity) => {
  if (lesson.parity === "odd" && weekParity) return false;
  if (lesson.parity === "even" && !weekParity) return false;

  return true;
};

const DayColumn = (props) => {
  const weekEven = props.date?.week() % 2 === 0 || false;

  return (
    <Column>
      <Header>{props.date?.locale("pl").format("dddd - DD.MM")}</Header>
      <Schedule>
        {props.lessons?.map(
          (lesson) =>
            matchingWeek(lesson, weekEven) && (
              <>
                <PositionedTile
                  name={lesson.name}
                  classroom={lesson.classroom}
                  hours_end={lesson.end_hour}
                  minutes_end={lesson.end_minutes}
                  hours_start={lesson.start_hour}
                  minutes_start={lesson.start_minutes}
                  key={lesson.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    props.onLessonSelected(lesson);
                  }}
                  selected={props.selectedLesson?.id === lesson.id}
                />
                {props.selectedLesson?.id === lesson.id && (
                  <LessonDetailPopup
                    lesson={props.selectedLesson}
                    hours_start={lesson.start_hour}
                    minutes_start={lesson.start_minutes}
                    position={props.dayOfWeekNumber > 3 ? "left" : "right"}
                  />
                )}
              </>
            )
        )}
      </Schedule>
    </Column>
  );
};

export default DayColumn;
