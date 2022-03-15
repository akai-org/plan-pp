import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear';

import Card from "../../../components/UI/Card";

dayjs.extend(weekOfYear);

const Box = styled(Card)`
  display: grid;
  grid-template-columns: 1em 1fr 1em;
  grid-template-rows: 2fr;
  align-items: center;
  text-align: center;
  max-width: 500px;
  gap: 4px;
  padding: 8px 12px;
  width: 100%;
`;

const DateDisplay = styled.h5`
  grid-column: 2/3;
  grid-row: 1/2;
  font-size: 1.5rem;
`;

const ParityIndicator = styled.span`
  grid-column: 2/3;
  grid-row: 2/3;
  text-transform: uppercase;
  font-weight: 300;
`;

const ArrowLeft = styled(MdKeyboardArrowLeft)`
  transform: scale(1.5);
  grid-column: 1/2;
  grid-row: 1/3;
  cursor: pointer;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  transform: scale(1.5);
  grid-column: 3/4;
  grid-row: 1/3;
  cursor: pointer;
`;

const WeekSwitcher = (props) => {
  const [weekStart, setWeekStart] = useState();
  const [weekEnd, setWeekEnd] = useState();
  const [parity, setParity] = useState();

  useEffect(() => {
    var monday = new Date();
    var day = monday.getDay() || 7;
    if (day !== 1) monday.setHours(-24 * (day - 1));
    const friday = new Date(monday).setHours(24 * 4);
    const weekNumber = dayjs(friday).week();
		setWeekStart(dayjs(monday));
		setWeekEnd(dayjs(friday));
    setParity(weekNumber % 2 === 0);
  }, []);

  useEffect(() => {
    props.onWeekChanged(weekStart, parity);
  }, [props, weekStart, parity]);

	const handleNextWeek = () => {
    const newWeekStart = weekStart.add(7, 'day');
		setWeekStart(newWeekStart);
		setWeekEnd(weekEnd.add(7, 'day'));

    const weekNumber = newWeekStart.week();
    setParity(weekNumber % 2 === 0);
	}

	const handlePreviousWeek = () => {
    const newWeekStart = weekStart.subtract(7, 'day');
		setWeekStart(newWeekStart);
		setWeekEnd(weekEnd.subtract(7, 'day'));

    const weekNumber = newWeekStart.week();
    setParity(weekNumber % 2 === 0);
	}

  return (
    <Box>
      <ArrowLeft onClick={handlePreviousWeek}/>
      <DateDisplay>
        {weekStart?.format("DD.MM")} - {weekEnd?.format("DD.MM")}
      </DateDisplay>
      <ParityIndicator>Tydzień {!parity && 'nie'}parzysty</ParityIndicator>
      <ArrowRight onClick={handleNextWeek}/>
    </Box>
  );
};

export default WeekSwitcher;
