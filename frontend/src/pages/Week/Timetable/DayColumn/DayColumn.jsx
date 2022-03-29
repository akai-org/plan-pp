import React from "react";
import styled from "styled-components";
import dayjs from 'dayjs';
import "dayjs/locale/pl";
import PropTypes from "prop-types";
import { useMediaPredicate } from 'react-media-hook';

import LessonDetailCard from "../../../../components/LessonDetailCard/LessonDetailCard";
import LessonStack from '../../LessonStack/LessonStack';

dayjs.locale("pl");

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

const DayColumn = (props) => {
  const underMediumSize = useMediaPredicate('(max-width: 1200px)');

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


  return (
    <Column className={props.className}>
      <Header>{props.date?.format("dddd - DD.MM")}</Header>
      <LessonStack lessons={props.lessons}
          onLessonSelected={props.onLessonSelected}
          selectedLesson={props.selectedLesson}
          useShorthandNames={underMediumSize}
      />
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
