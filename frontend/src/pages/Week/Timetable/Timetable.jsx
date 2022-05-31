import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DayColumn, { HOUR_HEIGHT_PX } from "./DayColumn/DayColumn";
import timetable from "./exampleLessons.js";

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  padding-left: 16px;
  position: relative;

  @media screen and (max-width: 900px){
    display: none;
  }
`;

const HorizontalRuler = styled.div`
  position: absolute;
  left: -8px;
  top: ${(props) => 28 + (props.number - 8) * HOUR_HEIGHT_PX}px;
  right: 0;
  transform: translateY(-40%);
  z-index: -1;
  &:before {
    background-color: gray;
    content: "";
    position: absolute;
    height: 1px;
    display: inline-block;
    left: 20px;
    right: 0px;
    top: 50%;
  }
`;

const Timetable = (props) => {
  return (
    <Table className={props.className}>
      {Object.values(timetable).map((day, index) => (
        <DayColumn
          lessons={day}
          date={props.firstDay?.add(index, "days")}
          onLessonSelected={props.onLessonSelected}
          selectedLesson={props.selectedLesson}
          dayOfWeekNumber={index + 1}
          key={index}
        />
      ))}

      {[...Array(13).keys()].map((i) => (
        <HorizontalRuler key={i + 8} number={i + 8}>
          {i + 8}
        </HorizontalRuler>
      ))}
    </Table>
  );
};

Timetable.propTypes = {
  firstDay: PropTypes.object,
  className: PropTypes.string,
  onLessonSelected: PropTypes.func,
  lessonSelected: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default Timetable;
