import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Tile = styled.div`
  background-color: ${(props) =>
    props.alternativeColor
      ? props.theme.colors.tile.secondary
      : props.theme.colors.tile.primary};
  border-radius: 4px;
  margin: 4px;
  min-height: 70px;
  min-width: 150px;
  position: relative;
  outline: ${(props) =>
    props.selected
      ? "2px solid " + (props.alternativeColor
        ? props.theme.colors.tile.secondary
        : props.theme.colors.tile.primary)
      : "none"};
  outline-offset: 1px;
`;

const StartTime = styled.span`
  font-weight: 700;
  position: absolute;
  top: 8px;
  left: 10px;
  color: ${(props) => props.theme.colors.text.secondaryWhite};
  font-size: 0.75rem;
`;

const EndTime = styled.span`
  font-weight: 700;
  position: absolute;
  bottom: 8px;
  left: 10px;
  color: ${(props) => props.theme.colors.text.secondaryWhite};
  font-size: 0.75rem;
`;

const Name = styled.span`
  font-weight: 500;
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  left: 10px;
  color: ${(props) => props.theme.colors.text.primaryWhite};
`;

const Classroom = styled.span`
  font-weight: 700;
  position: absolute;
  bottom: 8px;
  right: 10px;
  color: ${(props) => props.theme.colors.text.secondaryWhite};
  font-size: 0.75rem;
`;

const LessonTile = (props) => {
  return (
    <Tile
      className={props.className}
      selected={props.selected}
      alternativeColor={props.alternative}
      onClick={props.onClick}
    >
      <Name>{props.name}</Name>
      <StartTime>{props.start}</StartTime>
      <EndTime>{props.end}</EndTime>
      <Classroom>{props.classroom}</Classroom>
    </Tile>
  );
};

LessonTile.propTypes = {
  alternative: PropTypes.bool,
  name: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  classroom: PropTypes.string,
};

export default LessonTile;
