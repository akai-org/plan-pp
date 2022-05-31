import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  font-size: 2.25rem;
  margin: 0.5em;
`;

const PrimaryHeading = styled.span`
  font-weight: 300;
  font-size: 1.25rem;
  margin-bottom: 0.5em;
  text-transform: capitalize;
  padding: 2px;
`;

const SecondaryHeading = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.75rem;
`;

const PanelHeader = (props) => {
  return (
    <StyledHeader className={props.className}>
      <Title>{props.title}</Title>
      <PrimaryHeading>{props.primaryHeading}</PrimaryHeading>
      <SecondaryHeading>{props.secondaryHeading}</SecondaryHeading>
    </StyledHeader>
  );
};

PanelHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  primaryHeading: PropTypes.string.isRequired,
  secondaryHeading: PropTypes.string.isRequired,
};

export default PanelHeader;
