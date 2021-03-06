import React, { useState } from "react";
import styled from "styled-components";
import { useMediaPredicate } from "react-media-hook";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import weekday from "dayjs/plugin/weekday";
import LessonDetailCard from "../../components/LessonDetailCard/LessonDetailCard";

import Heading from "./Heading/Heading";
import Timetable from "./Timetable/Timetable";
import DaySwitcher from "./DaySwitcher/DaySwitcher";
import exampleLessons from "./Timetable/exampleLessons";
import LessonStack from "./LessonStack/LessonStack";
import MobileOverlay from "../../components/UI/Modal/MobileOverlay/MobileOverlay";

dayjs.extend(weekday);
dayjs.locale("pl");

const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 16px;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    margin-bottom: 75px;
    margin-top: 8px;
    gap: 8px;
  }
`;

const OverflowContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 200%;

  @media screen and (max-width: 600px) {
    width: 280%;
  }
`;

const LessonDetailWindow = styled(LessonDetailCard)`
  background: transparent;
  z-index: 10;
  width: 90%;
  box-shadow: none;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LessonDetailPopup = styled(LessonDetailCard)`
  position: fixed;
  top: ${(props) => Math.min(props.lesson.startHours * 50, 700)}px;
  transform: translate(15vw, -50%);
`;

const Week = (props) => {
  const underMediumSize = useMediaPredicate("(max-width: 900px)");
  const underSmallSize = useMediaPredicate("(max-width: 600px)");
  const [firstDayOfWeek, setFirstDayOfWeek] = useState();
  const [day, setDay] = useState(dayjs());
  const [selectedLesson, setSelectedLesson] = useState(null);

  const LessonDetailMobile = selectedLesson && (
    <MobileOverlay onClick={() => setSelectedLesson(null)}>
      <LessonDetailWindow lesson={selectedLesson} />
    </MobileOverlay>
  );
  const LessonDetailTablet = selectedLesson && (
    <LessonDetailPopup lesson={selectedLesson} />
  );

  return (
    <Container onClick={() => setSelectedLesson(null)}>
      {underMediumSize ? (
        <DaySwitcher day={day} onDayChanged={setDay} />
      ) : (
        <Heading onWeekChanged={setFirstDayOfWeek} />
      )}

      {underMediumSize ? (
        <OverflowContainer>
          <LessonStack
            lessons={exampleLessons[Object.keys(exampleLessons)[day.day() - 2]]}
            date={day.subtract(1, "day")}
          />
          <LessonStack
            lessons={exampleLessons[Object.keys(exampleLessons)[day.day() - 1]]}
            date={day}
            onLessonSelected={setSelectedLesson}
            selectedLesson={selectedLesson}
          />
          <LessonStack
            lessons={exampleLessons[Object.keys(exampleLessons)[day.day()]]}
            date={day.add(1, "day")}
          />
          {underSmallSize ? LessonDetailMobile : LessonDetailTablet}
        </OverflowContainer>
      ) : (
        <Timetable
          selectedLesson={selectedLesson}
          onLessonSelected={setSelectedLesson}
          firstDay={firstDayOfWeek}
        />
      )}
    </Container>
  );
};

export default Week;
