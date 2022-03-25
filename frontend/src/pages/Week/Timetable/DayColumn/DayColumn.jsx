import React from "react";
import styled from "styled-components";
import "dayjs/locale/pl";
import PropTypes from "prop-types";

import LessonTile from "../../../../components/LessonTile/LessonTile";
import LessonDetailCard from "../../../../components/LessonDetailCard/LessonDetailCard";

export const HOUR_HEIGHT_PX = 50;

const Column = styled.div`
  position: relative;
`;

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
  top: ${(props) => props.startOffset}px;
  height: ${(props) => props.height}px;
  left: 0;
  right: 0;
`;

const LessonDetailPopup = styled(LessonDetailCard)`
  position: absolute;
  z-index: 10;
  left: ${(props) => (props.position === "left" ? undefined : 0)};
  right: ${(props) => (props.position === "left" ? 0 : undefined)};
  top: ${(props) => props.topOffset}px;
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
  const lessonInsidePopup = props.lessons?.find(
    (lesson) => lesson.id === props.selectedLesson?.id
  );

  const popup = lessonInsidePopup && (
    <LessonDetailPopup
      topOffset={Math.min(
        (lessonInsidePopup.startHours -
          8 +
          lessonInsidePopup.startMinutes / 60) *
          HOUR_HEIGHT_PX,
        300
      )}
      lesson={props.selectedLesson}
      position={props.dayOfWeekNumber > 3 ? "left" : "right"}
    />
  );

  const lessonTiles = props.lessons?.map(
    (lesson) =>
      matchingWeek(lesson, weekEven) && (
        <PositionedTile
          startOffset={
            (lesson.startHours - 8 + lesson.startMinutes / 60) * HOUR_HEIGHT_PX
          }
          height={
            (lesson.endHours -
              lesson.startHours +
              (lesson.endMinutes - lesson.startMinutes) / 60) *
            HOUR_HEIGHT_PX
          }
          lesson={lesson}
          key={lesson.id}
          onClick={(e) => {
            e.stopPropagation();
            props.onLessonSelected(lesson);
          }}
          selected={props.selectedLesson?.id === lesson.id}
        />
      )
  );

  return (
    <Column className={props.className}>
      <Header>{props.date?.locale("pl").format("dddd - DD.MM")}</Header>
      <Schedule>{lessonTiles}</Schedule>
      {popup}
    </Column>
  );
};

DayColumn.propTypes = {
  className: PropTypes.string,
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      startHours: PropTypes.number,
      startMinutes: PropTypes.number,
      endHours: PropTypes.number,
      endMinutes: PropTypes.number,
      teacher: PropTypes.string,
      parity: PropTypes.oneOf(["odd", "even"]),
      classroom: PropTypes.string,
      notes: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  dayOfWeekNumber: PropTypes.number,
  selectedLesson: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default DayColumn;
