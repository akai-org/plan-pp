import React from "react";
import Card from "../../../components/UI/Card";
import Button from "../../../components/UI/Button";
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
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

const MainCard = (props) => {
  return (
    <StyledCard className={props.className}>
      <PanelHeader
        title="Dzisiaj"
        primaryHeading="Poniedziałek - 25.10"
        secondaryHeading="tydzien nieparzysty"
      />
      <LessonList>
        <LessonTile />
        <LessonTile />
      </LessonList>
      <StyledButton>Zobacz pełny plan na tydzień</StyledButton>
    </StyledCard>
  );
};

export default MainCard;