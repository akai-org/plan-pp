import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import LessonTile from "../../../components/LessonTile/LessonTile";

const HOUR_HEIGHT_PX = 50;

const Schedule = styled.div`
  min-height: ${(props) => 13 * HOUR_HEIGHT_PX}px;
  position: relative;
	max-width: 500px;
	width: 100%;
`;

const PositionedTile = styled(LessonTile)`
  position: absolute;
  top: ${(props) => props.startOffset}px;
  height: ${(props) => props.height}px;
  left: 0;
  right: 0;
`;

const matchingWeek = (lesson, weekParity) => {
  if (lesson.parity === "odd" && weekParity) return false;
  if (lesson.parity === "even" && !weekParity) return false;

  return true;
};

const LessonStack = (props) => {
  const weekEven = props.date?.week() % 2 === 0 || false;
  return (
    <Schedule>
      {props.lessons?.map(
        (lesson) =>
          matchingWeek(lesson, weekEven) && (
            <PositionedTile
              startOffset={
                (lesson.startHours - 8 + lesson.startMinutes / 60) *
                HOUR_HEIGHT_PX
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
							useShorthand={props.useShorthandNames}
            />
          )
      )}
    </Schedule>
  );
};

LessonStack.propTypes = {
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
  selectedLesson: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default LessonStack;
