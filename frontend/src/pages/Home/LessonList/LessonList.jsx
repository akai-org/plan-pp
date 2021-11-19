import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const LessonList = (props) => {
  return <StyledList className={props.className}>{props.children}</StyledList>;
};

LessonList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default LessonList;
