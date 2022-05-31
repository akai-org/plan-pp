import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
import dayjs from 'dayjs';
import weekOfYear from "dayjs/plugin/weekOfYear";
import "dayjs/locale/pl";

dayjs.extend(weekOfYear);
dayjs.locale("pl");

const Box = styled.div`
  display: grid;
  grid-template-columns: 1em 1fr 1em;
  grid-template-rows: 2fr;
  align-items: center;
  text-align: center;
  max-width: 500px;
  row-gap: 4px;
  column-gap: 16px;
  padding: 8px 12px;
	margin: auto;
`;

const DateDisplay = styled.h5`
  grid-column: 2/3;
  grid-row: 1/2;
  font-size: 1.75rem;
	font-family: "Roboto Slab";
	font-weight: 400;
  text-transform: capitalize;
  min-width: 280px;

  @media screen and (max-width: 600px){
    min-width: 200px;
    font-size: 1.5rem;
  }
`;

const ParityIndicator = styled.span`
  grid-column: 2/3;
  grid-row: 2/3;
  text-transform: uppercase;
  font-weight: 300;
`;

const ArrowLeft = styled(MdKeyboardArrowLeft)`
  transform: scale(2);
  grid-column: 1/2;
  grid-row: 1/3;
  cursor: pointer;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  transform: scale(2);
  grid-column: 3/4;
  grid-row: 1/3;
  cursor: pointer;
`;

const DaySwitcher = (props) => {
  const handleNextDay = () => {
    let nextDay = props.day.add(1, 'day');
    while (nextDay.day() === 0 || nextDay.day() === 6)
      nextDay = nextDay.add(1, 'day');
    props.onDayChanged(nextDay);
  };

  const handlePreviousDay = () => {
    let previousDay = props.day.subtract(1, 'day');
    while (previousDay.day() === 0 || previousDay.day() === 6)
      previousDay = previousDay.subtract(1, 'day');
    props.onDayChanged(previousDay);
  };
  
  return (
    <Box className={props.className}>
      <ArrowLeft onClick={handlePreviousDay}/>
      <DateDisplay>
        {props.day?.format("dddd - DD.MM")}
      </DateDisplay>
      <ParityIndicator>
        Tydzień {props.day?.week() % 2 === 0 ? "Parzysty" : "Nieparzysty"}
      </ParityIndicator>
      <ArrowRight onClick={handleNextDay}/>
    </Box>
  );
};

DaySwitcher.propTypes = {
  className: PropTypes.string,
  onDayChanged: PropTypes.func,
};

export default DaySwitcher;
