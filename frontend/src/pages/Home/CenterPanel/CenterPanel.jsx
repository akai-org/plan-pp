import React from "react";
import Card from "../../../components/UI/Card";
import Button from "../../../components/UI/Button";
import LessonTile from "../../../components/LessonTile/LessonTile";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const Title = styled.h3`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  font-size: 2.25rem;
  margin: 0.5em;
`;

const Date = styled.span`
  font-weight: 300;
  font-size: 1.25rem;
  margin-bottom: 0.5em;
`;

const WeekIndicator = styled.div`
  color: rgba(34, 34, 34, 0.75);
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.75rem;
`;

const LessonList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

const MainCard = (props) => {
  return (
    <StyledCard className={props.className}>
      {/* Header - potencjalnie osobny komponent */}
      <Header>
        <Title>Dzisiaj</Title>
        <Date>Poniedziałek - 25.10</Date>
        <WeekIndicator>tydzień nieparzysty</WeekIndicator>
      </Header>
      {/* LessonList - potencjalnie osobny komponent */}
      <LessonList>
        <LessonTile></LessonTile>
        <LessonTile></LessonTile>
      </LessonList>
      <StyledButton>Zobacz pełny plan na tydzień</StyledButton>
    </StyledCard>
  );
};

export default MainCard;
