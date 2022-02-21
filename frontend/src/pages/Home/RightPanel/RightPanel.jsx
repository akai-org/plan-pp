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
  margin:40px 0;
  @media screen and (max-width: 1024px){
    margin: 0;
    width: 100%;
    max-width: 500px;
  }
`;

const RightPanel = (props) => {
  return (
    <StyledCard className={props.className}>
      <PanelHeader
        title="Jutro"
        primaryHeading="Wtorek - 26.10"
        secondaryHeading="tydzien nieparzysty"
      />
      <LessonList>
        <LessonTile
          alternative
          start="16:50"
          end="18:20"
          name="Spotkanie koła"
          classroom="125BT"
        />
        <LessonTile
          alternative
          start="16:50"
          end="18:20"
          name="Spotkanie koła"
          classroom="125BT"
        />
      </LessonList>
      {/* Pusty div potrzebny żeby layout sie nie popsuł */}
      <div />
    </StyledCard>
  );
};

export default RightPanel;
