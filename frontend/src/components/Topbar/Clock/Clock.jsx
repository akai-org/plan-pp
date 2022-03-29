import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pl";

import PropTypes from 'prop-types';

dayjs.locale("pl");

const ClockWrapper = styled.span`
  text-align: center;
`;

const TimeDisplay = styled.div`
  font-weight: 300;
  font-size: 1.75rem;
  line-height: 36px;
`;

const DateDisplay = styled.div`
  font-weight: normal;
  font-size: 1rem;
  line-height: 14px;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const Clock = (props) => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ClockWrapper className={props.className}>
      <TimeDisplay>{time.format("HH:mm")}</TimeDisplay>
      <DateDisplay>{time.format("D MMMM")}</DateDisplay>
    </ClockWrapper>
  );
};

Clock.propTypes = {
  className: PropTypes.string,
}

export default Clock;
