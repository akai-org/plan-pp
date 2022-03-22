import React, { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import CenterPanel from "./CenterPanel/CenterPanel";
import LessonDetailCard from "../../components/LessonDetailCard/LessonDetailCard";
import RightPanel from "./RightPanel/RightPanel";
import exampleLessons from "../../pages/Week/Timetable/exampleLessons";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: 32% 36% 32%;
  gap: 28px;
  justify-content: center;
  padding: 50px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    padding: 20px;
  }
`;

const LeftPanel = styled(LessonDetailCard)`
  margin: 40px 0;
  @media screen and (max-width: 1024px) {
    margin: 0;
    width: 100%;
    max-width: 500px;
  }
`;

const Home = (props) => {
  let today = dayjs();

  const lessonsToday =
    exampleLessons[Object.keys(exampleLessons)[today.day() - 1]];
  const lessonsTomorrow =
    exampleLessons[Object.keys(exampleLessons)[today.day() % 7]];

  const [selectedLesson, setSelectedLesson] = useState(lessonsToday[0]);
  return (
    <>
      <Container>
        <LeftPanel lesson={selectedLesson}></LeftPanel>
        <CenterPanel
          date={today}
          lessons={lessonsToday}
          onLessonSelected={setSelectedLesson}
          selectedLesson={selectedLesson}
        />
        <RightPanel
          date={today.add(1, "day")}
          lessons={lessonsTomorrow}
          onLessonSelected={setSelectedLesson}
          selectedLesson={selectedLesson}
        />
      </Container>
    </>
  );
};

export default Home;
