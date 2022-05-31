import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  MdKeyboardArrowLeft as iconLeft,
  MdKeyboardArrowRight as iconRight
} from "react-icons/md";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import PropTypes from "prop-types";

import Card from "../../../components/UI/Card";
import Button from '../../../components/UI/Button';

const Box = styled(Card)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 2fr;
  grid-template-areas: 'left date right' 'left parity right';
  align-items: center;
  text-align: center;
  max-width: 500px;
  gap: 4px 12px;
  padding: 8px;
  min-width: 300px;
`;

const DateDisplay = styled.h5`
  grid-area: date;
  font-size: 1.5rem;
`;

const ParityIndicator = styled.span`
  grid-area: parity;
  text-transform: uppercase;
  font-weight: 300;
`;

const ArrowLeft = styled(Button)`
  font-size: 1.5em;
  grid-area: left;
`;

const ArrowRight = styled(Button)`
  font-size: 1.5em;
  grid-area: right;
`;

const WeekSwitcher = (props) => {
  const [weekStart, setWeekStart] = useState();

  useEffect(() => {
    dayjs.extend(weekOfYear);
    let monday = dayjs();
    const dayOfWeek = dayjs().day() || 7;
    monday = monday.subtract(dayOfWeek - 1, "days");
    setWeekStart(dayjs(monday));
  }, []);

  useEffect(() => {
    props.onWeekChanged(weekStart);
  }, [props, weekStart]);

  const handleNextWeek = () => {
    const newWeekStart = weekStart.add(7, "day");
    setWeekStart(newWeekStart);
  };

  const handlePreviousWeek = () => {
    const newWeekStart = weekStart.subtract(7, "day");
    setWeekStart(newWeekStart);
  };

  return (
    <Box className={props.className}>
      <ArrowLeft variant="icon" icon={iconLeft} onClick={handlePreviousWeek} />
      <DateDisplay>
        {weekStart?.format("DD.MM")} -{" "}
        {weekStart?.add(4, "days").format("DD.MM")}
      </DateDisplay>
      <ParityIndicator>
        Tydzień {weekStart?.week() % 2 ? "nieparzysty" : "parzysty"}
      </ParityIndicator>
      <ArrowRight variant="icon" icon={iconRight} onClick={handleNextWeek} />
    </Box>
  );
};

WeekSwitcher.propTypes = {
  className: PropTypes.string,
  onWeekChanged: PropTypes.func,
};

export default WeekSwitcher;
