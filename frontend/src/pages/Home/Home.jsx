import React from "react";

import Topbar from "../../components/Topbar/Topbar";
import CenterPanel from "./CenterPanel/CenterPanel";
import styled from "styled-components";
import LessonDetailCard from "../../components/LessonDetailCard/LessonDetailCard";
import Card from "../../components/UI/Card";

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: 32% 36% 32%;
  gap: 28px;
  justify-content: center;
`;

const CardMockup = styled(Card)`
  transform: translateY(30px);
  border-radius: 12px;
  min-height: 500px;
  min-width: 300px;
`;

const RightPanel = styled(LessonDetailCard)`
  transform: translateY(30px);
`;

const Home = (props) => {
  return (
    <>
      <Topbar></Topbar>
      <Container>
        <RightPanel></RightPanel>
        <CenterPanel></CenterPanel>
        <CardMockup></CardMockup>
      </Container>
    </>
  );
};

export default Home;
