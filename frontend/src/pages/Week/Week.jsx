import React, {useState} from "react";
import styled from 'styled-components'

import Heading from "./Heading/Heading";
import Timetable from "./Timetable/Timetable";

const Container = styled.div`
	/* max-width: 1200px; */
  width: 1200px;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 40px;
`

const Week = (props) => {
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(undefined);
  const [weekParity, setWeekParity] = useState(false);
  
  const handleWeekChanged = (firstDay, parity) => {
    setFirstDayOfWeek(firstDay);
    setWeekParity(parity);
  }
  
  return (
    <Container>
      <Heading onWeekChanged={handleWeekChanged}/>
      <Timetable firstDay={firstDayOfWeek} weekParity={weekParity}/>
    </Container>
  );
};

export default Week;
