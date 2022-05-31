import React, { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import CenterPanel from "./CenterPanel/CenterPanel";
import LessonDetailCard from "../../components/LessonDetailCard/LessonDetailCard";
import RightPanel from "./RightPanel/RightPanel";
import exampleLessons from "../../pages/Week/Timetable/exampleLessons";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 128px);
  max-width: 1200px;
  margin: 32px auto 0;
  display: grid;
  grid-template-columns: 32% 36% 32%;
  grid-template-rows: minmax(auto, 600px);
  gap: 28px;
  place-content: center;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    padding: 20px;
  }

  @media screen and (max-width: 600px){
    margin-bottom: 70px;
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

  const [selectedLesson, setSelectedLesson] = useState(lessonsToday?.[0]);

  const handleLessonSelected = lesson => {
    setSelectedLesson(lesson);
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return (
    <>
      <Container>
        <LeftPanel lesson={selectedLesson}></LeftPanel>
        <CenterPanel
          date={today}
          lessons={lessonsToday}
          onLessonSelected={handleLessonSelected}
          selectedLesson={selectedLesson}
        />
        <RightPanel
          date={today.add(1, "day")}
          lessons={lessonsTomorrow}
          onLessonSelected={handleLessonSelected}
          selectedLesson={selectedLesson}
        />
      </Container>
    </>
  );
};

export default Home;
