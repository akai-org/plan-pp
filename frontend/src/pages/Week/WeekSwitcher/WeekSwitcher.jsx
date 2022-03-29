import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import PropTypes from "prop-types";

import Card from "../../../components/UI/Card";

const Box = styled(Card)`
  display: grid;
  grid-template-columns: 1em 1fr 1em;
  grid-template-rows: 2fr;
  align-items: center;
  text-align: center;
  max-width: 500px;
  gap: 4px;
  padding: 8px 12px;
  min-width: 300px;
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
      <ArrowLeft onClick={handlePreviousWeek} />
      <DateDisplay>
        {weekStart?.format("DD.MM")} -{" "}
        {weekStart?.add(4, "days").format("DD.MM")}
      </DateDisplay>
      <ParityIndicator>
        Tydzień {weekStart?.week() % 2 ? "nieparzysty" : "parzysty"}
      </ParityIndicator>
      <ArrowRight onClick={handleNextWeek} />
    </Box>
  );
};

WeekSwitcher.propTypes = {
  className: PropTypes.string,
  onWeekChanged: PropTypes.func,
};

export default WeekSwitcher;
