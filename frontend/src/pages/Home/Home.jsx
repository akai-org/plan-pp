import React from "react";
import styled from "styled-components";

import CenterPanel from "./CenterPanel/CenterPanel";
import LessonDetailCard from "../../components/LessonDetailCard/LessonDetailCard";
import RightPanel from "./RightPanel/RightPanel";

const Container = styled.div`
	width: 100%;
  max-width: 1200px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: 32% 36% 32%;
  gap: 28px;
  justify-content: center;
  padding: 50px;

  @media screen and (max-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    padding: 20px;
  }
`;

const LeftPanel = styled(LessonDetailCard)`
  margin:40px 0;
  @media screen and (max-width: 1024px){
    margin: 0;
    width: 100%;
    max-width: 500px;
  }
`;

const Home = (props) => {
  return (
    <>
      <Container>
        <LeftPanel></LeftPanel>
        <CenterPanel></CenterPanel>
        <RightPanel></RightPanel>
      </Container>
    </>
  );
};

export default Home;
