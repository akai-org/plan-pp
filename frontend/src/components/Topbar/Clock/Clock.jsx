import React from "react";
import styled from "styled-components";

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
  color: rgba(34, 34, 34, 0.75);
`;

const Clock = (props) => {
  return (
    <ClockWrapper className={props.className}>
      <TimeDisplay>12:34</TimeDisplay>
      <DateDisplay>24 grudnia</DateDisplay>
    </ClockWrapper>
  );
};

export default Clock;
