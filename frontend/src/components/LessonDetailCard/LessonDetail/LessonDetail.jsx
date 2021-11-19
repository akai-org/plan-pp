import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  margin: 30px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const TimeDisplay = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
`;

const Classroom = styled.span`
  font-size: 1.25rem;
`;

const Capiton = styled.span`
  color: rgba(34, 34, 34, 0.45);
  font-size: 0.9rem;
`;

const OtherInfo = styled.span`
  font-size: 1rem;
  line-height: 150%;
`;

const ThinText = styled.span`
  font-weight: 300;
  color: rgba(34, 34, 34, 0.75);
`;

const LessonDetail = (props) => {
  return (
    <>
      <GridContainer>
        <TimeDisplay>16:50</TimeDisplay>
        <Classroom>125 BT</Classroom>
        <TimeDisplay>18:20</TimeDisplay>
        <Capiton>początek</Capiton>
        <Capiton>sala</Capiton>
        <Capiton>koniec</Capiton>
      </GridContainer>
      <OtherInfo>
        <ThinText>prowadzący: </ThinText>
        Janina Nowak
      </OtherInfo>
      <OtherInfo>
        <ThinText>tygodnie: </ThinText>
        nieparzyste
      </OtherInfo>
    </>
  );
};

export default LessonDetail;
