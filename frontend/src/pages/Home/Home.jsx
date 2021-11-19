import React from "react";

import Topbar from "../../components/Topbar/Topbar";
import CenterPanel from "./CenterPanel/CenterPanel";
import styled from "styled-components";
import LessonDetailCard from "../../components/LessonDetailCard/LessonDetailCard";
import RightPanel from "./RightPanel/RightPanel";

const Container = styled.div`
  max-width: 1200px;
  min-width: 1000px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: 32% 36% 32%;
  gap: 28px;
  justify-content: center;
`;

const LeftPanel = styled(LessonDetailCard)`
  transform: translateY(30px);
`;

const Home = (props) => {
  return (
    <>
      <Topbar></Topbar>
      <Container>
        <LeftPanel></LeftPanel>
        <CenterPanel></CenterPanel>
        <RightPanel></RightPanel>
      </Container>
    </>
  );
};

export default Home;
