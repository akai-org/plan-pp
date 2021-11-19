import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: white;
`;

const Card = (props) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;
