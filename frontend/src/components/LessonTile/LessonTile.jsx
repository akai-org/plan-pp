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
      ? "2px solid " +
        (props.alternativeColor
          ? props.theme.colors.tile.secondary
          : props.theme.colors.tile.primary)
      : "none"};
  outline-offset: 1px;
`;

const StartTime = styled.span`
  font-weight: 700;
  position: absolute;
  top: 4px;
  left: 10px;
  color: ${(props) => props.theme.colors.text.secondaryWhite};
  font-size: 0.75rem;
`;

const EndTime = styled.span`
  font-weight: 700;
  position: absolute;
  bottom: 4px;
  left: 10px;
  color: ${(props) => props.theme.colors.text.secondaryWhite};
  font-size: 0.75rem;
`;

const Name = styled.span`
  font-weight: 500;
  line-height: 95%;
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  left: 10px;
  color: ${(props) => props.theme.colors.text.primaryWhite};
`;

const Classroom = styled.span`
  font-weight: 700;
  position: absolute;
  bottom: 4px;
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
      <Name>{props.lesson?.name}</Name>
      <StartTime>
        {("0" + props.lesson?.startHours).slice(-2) +
          ":" +
          ("0" + props.lesson?.startMinutes).slice(-2)}
      </StartTime>
      <EndTime>
        {("0" + props.lesson?.endHours).slice(-2) +
          ":" +
          ("0" + props.lesson?.endMinutes).slice(-2)}
      </EndTime>
      <Classroom>{props.lesson?.classroom}</Classroom>
    </Tile>
  );
};

LessonTile.propTypes = {
  alternative: PropTypes.bool,
  name: PropTypes.string,
  classroom: PropTypes.string,
  startMinutes: PropTypes.number,
  startHours: PropTypes.number,
  endMinutes: PropTypes.number,
  endHours: PropTypes.number,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default LessonTile;
