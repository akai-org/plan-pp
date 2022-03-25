import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../UI/Button";
import Card from "../UI/Card";
import LessonDetail from "./LessonDetail/LessonDetail";
import theme from '../../theme';

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  display: inline-flex;
  padding: 1em 2em;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  border-radius: 12px;
  min-height: 450px;
  min-width: 300px;
  max-width: 380px;
  box-shadow: ${() => theme.boxShadow.large}
`;

const LessonName = styled.h3`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0.5em 0;
`;

const TypeIndicator = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.75rem;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 30px 0;
`;

const Notes = styled.p`
  margin: 5px 0;
  text-align: left;
`;

const EditButton = styled(Button)`
  align-self: center;
  width: 80px;
  margin-top: auto;
`;

const LessonDetailCard = (props) => {
  let lessonType = "";
  switch (props.lesson?.type) {
    case "lecture": lessonType = "Wykład"; break;
    case "laboratory": lessonType = "Laboratorium"; break;
    case "workshop": lessonType = "Ćwiczenia"; break;
    case "seminar": lessonType = "Seminarium"; break;
    default: break;
  }

  return (
    <StyledCard className={props.className}>
      <Header>
        <LessonName>{props.lesson?.name}</LessonName>
        <TypeIndicator>{lessonType}</TypeIndicator>
      </Header>
      <LessonDetail lesson={props.lesson}/>
      <Actions>
        <Button>Przejdź na ekursy</Button>
        <Button>Dołącz do spotkania</Button>
      </Actions>
      <Notes>{props.lesson?.notes || "Brak notatek dla tych zajęć"}</Notes>
      <EditButton>Edytuj</EditButton>
    </StyledCard>
  );
};

LessonDetailCard.propTypes = {
  className: PropTypes.string,
  lesson: PropTypes.shape({
    name: PropTypes.string,
    startHours: PropTypes.number,
    startMinutes: PropTypes.number,
    endHours: PropTypes.number,
    endMinutes: PropTypes.number,
    teacher: PropTypes.string,
    parity: PropTypes.oneOf(['odd', 'even']),
    classroom: PropTypes.string,
    notes: PropTypes.string,
  })
};

export default LessonDetailCard;
