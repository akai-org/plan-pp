import React from "react";
import Card from "../../../components/UI/Card";
import LessonTile from "../../../components/LessonTile/LessonTile";
import styled from "styled-components";
import PanelHeader from "../PanelHeader/PanelHeader";
import LessonList from "../LessonList/LessonList";

const StyledCard = styled(Card)`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border-radius: 12px;
  min-height: 500px;
  min-width: 300px;
  transform: translateY(30px);
`;

const MainCard = (props) => {
  return (
    <StyledCard className={props.className}>
      <PanelHeader
        title="Jutro"
        primaryHeading="Wtorek - 26.10"
        secondaryHeading="tydzien nieparzysty"
      />
      <LessonList>
        <LessonTile alternative />
        <LessonTile alternative />
      </LessonList>
      {/* Pusty div potrzebny żeby layout sie nie popsuł */}
      <div />
    </StyledCard>
  );
};

export default MainCard;
