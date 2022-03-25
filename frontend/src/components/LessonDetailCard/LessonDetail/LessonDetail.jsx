import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const GridContainer = styled.div`
  display: grid;
  margin: 30px;
  grid-template-columns: 1fr 2fr 1fr;
`;

const TimeDisplay = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
`;

const Classroom = styled.span`
  font-size: 1.25rem;
`;

const Capiton = styled.span`
  color: rgba(34, 34, 34, 0.45);
  font-size: 0.9rem;
`;

const OtherInfo = styled.span`
  font-size: 1rem;
  line-height: 150%;
`;

const ThinText = styled.span`
  font-weight: 300;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const LessonDetail = (props) => {
  const { lesson } = props;

  return (
    <>
      <GridContainer>
        <TimeDisplay>
          {("0" + lesson?.startHours).slice(-2)}:
          {("0" + lesson?.startMinutes).slice(-2)}
        </TimeDisplay>
        <Classroom>{lesson?.classroom}</Classroom>
        <TimeDisplay>
          {("0" + lesson?.endHours).slice(-2)}:
          {("0" + lesson?.endMinutes).slice(-2)}
        </TimeDisplay>
        <Capiton>początek</Capiton>
        <Capiton>sala</Capiton>
        <Capiton>koniec</Capiton>
      </GridContainer>
      <OtherInfo>
        <ThinText>prowadzący: </ThinText>
        {lesson?.teacher || "Imię Nazwisko"}
      </OtherInfo>
      <OtherInfo>
        <ThinText>tygodnie: </ThinText>
        {lesson?.parity === "odd"
          ? "Nieparzyste"
          : lesson?.parity === "even"
          ? "Parzyste"
          : "Wszystkie"}
      </OtherInfo>
    </>
  );
};

LessonDetail.propTypes = {
  lesson: PropTypes.shape({
    startHours: PropTypes.number,
    startMinutes: PropTypes.number,
    endHours: PropTypes.number,
    endMinutes: PropTypes.number,
    teacher: PropTypes.string,
    parity: PropTypes.oneOf(['odd', 'even']),
    classroom: PropTypes.string
  })
}

export default LessonDetail;
