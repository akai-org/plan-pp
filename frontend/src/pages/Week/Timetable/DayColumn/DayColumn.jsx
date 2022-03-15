import React from "react";
import styled from "styled-components";
import "dayjs/locale/pl";
import { v4 as uuidv4 } from "uuid";

import LessonTile from "../../../../components/LessonTile/LessonTile";

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
              <PositionedTile
                name={lesson.name}
                classroom={lesson.classroom}
                hours_end={lesson.end_hour}
                minutes_end={lesson.end_minutes}
                hours_start={lesson.start_hour}
                minutes_start={lesson.start_minutes}
                key={uuidv4()}
              />
            )
        )}
      </Schedule>
    </Column>
  );
};

export default DayColumn;
