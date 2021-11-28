//Komponent w trakcie tworzenia

import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";
import LessonDetail from "./LessonDetail/LessonDetail";
import PropTypes from "prop-types";

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
  min-height: 500px;
  min-width: 300px;
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

const LeftCard = (props) => {
  return (
    <StyledCard className={props.className}>
      <Header>
        <LessonName>Systemy Operacyjne</LessonName>
        <TypeIndicator>Wykład</TypeIndicator>
      </Header>
      <LessonDetail />
      <Actions>
        <Button>Przejdź na ekursy</Button>
        <Button>Dołącz do spotkania</Button>
      </Actions>
      <Notes>Pamiętać o zaznaczeniu obecności!</Notes>
      <EditButton>Edytuj</EditButton>
    </StyledCard>
  );
};

LeftCard.propTypes = {
  className: PropTypes.string,
};

export default LeftCard;
