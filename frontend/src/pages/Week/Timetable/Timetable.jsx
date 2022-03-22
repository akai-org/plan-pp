import React, { useState} from "react";
import styled from "styled-components";
import DayColumn, { HOUR_HEIGHT_PX } from "./DayColumn/DayColumn";

import timetable from "./exampleLessons.js";

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  gap: 8px;
  padding: 0 16px;
  position: relative;
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

const rulers = [];
for (let i = 8; i <= 21; i++) {
  rulers.push(i);
}

const Timetable = (props) => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <Table onClick={() => setSelectedLesson(null)}>
      <DayColumn
        lessons={timetable.monday}
        date={props.firstDay}
        onLessonSelected={setSelectedLesson}
        selectedLesson={selectedLesson}
        dayOfWeekNumber={1}
      />
      <DayColumn
        lessons={timetable.tuesday}
        date={props.firstDay?.add(1, "days")}
        onLessonSelected={setSelectedLesson}
        selectedLesson={selectedLesson}
        dayOfWeekNumber={2}
      />
      <DayColumn
        lessons={timetable.wednesday}
        date={props.firstDay?.add(2, "days")}
        onLessonSelected={setSelectedLesson}
        selectedLesson={selectedLesson}
        dayOfWeekNumber={3}
      />
      <DayColumn
        lessons={timetable.thursday}
        date={props.firstDay?.add(3, "days")}
        onLessonSelected={setSelectedLesson}
        selectedLesson={selectedLesson}
        dayOfWeekNumber={4}
      />
      <DayColumn
        lessons={timetable.friday}
        date={props.firstDay?.add(4, "days")}
        onLessonSelected={setSelectedLesson}
        selectedLesson={selectedLesson}
        dayOfWeekNumber={5}
      />

      {rulers.map((i) => (
        <HorizontalRuler key={i} number={i}>
          {i}
        </HorizontalRuler>
      ))}
    </Table>
  );
};

export default Timetable;
