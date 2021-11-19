import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";

const Tile = styled.div`
  color: white;
  background-color: ${(props) =>
    props.alternativeColor ? "#669AB8" : "#0085d0"};
  border-radius: 4px;
  margin: 4px;
  min-height: 70px;
  min-width: 200px;
  position: relative;
`;

const StartTime = styled.span`
  font-weight: 700;
  position: absolute;
  top: 8px;
  left: 10px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.75rem;
`;

const EndTime = styled.span`
  font-weight: 700;
  position: absolute;
  bottom: 8px;
  left: 10px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.75rem;
`;

const Name = styled.span`
  font-weight: 500;
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  left: 10px;
  color: rgba(255, 255, 255, 0.95);
`;

const Classroom = styled.span`
  font-weight: 700;
  position: absolute;
  bottom: 8px;
  right: 10px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.75rem;
`;

const LessonTile = (props) => {
  return (
    <Tile className={props.className} alternativeColor={props.alternative}>
      <Name>Spotkanie Koła</Name>
      <StartTime>16:50</StartTime>
      <EndTime>18:20</EndTime>
      <Classroom>125BT</Classroom>
    </Tile>
  );
};

LessonTile.propTypes = {
  className: string,
  alternative: PropTypes.bool,
};

export default LessonTile;
