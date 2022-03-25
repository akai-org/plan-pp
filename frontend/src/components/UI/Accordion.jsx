import React from "react";
import styled from "styled-components";
import {
  MdKeyboardArrowDown as IconDown,
  MdKeyboardArrowUp as IconUp,
} from "react-icons/md";
import PropTypes from "prop-types";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 8px 0;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    padding: 12px 0;
  }
`;

const ContentWrapper = styled.div`
  padding: 0.5em 1em;
`;

const Accordion = (props) => {
  return (
    <div>
      <Bar onClick={props.onClick}>
        <span>{props.label}</span>
        {props.expanded ? <IconUp /> : <IconDown />}
      </Bar>
      {props.expanded && <ContentWrapper>{props.children}</ContentWrapper>}
    </div>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.string,
};

export default Accordion;
