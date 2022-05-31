import React from "react";
import styled from "styled-components";
import Card from "../../components/UI/Card";
import YearSelector from "./YearSelector/YearSelector";

const Container = styled(Card)`
  max-width: 850px;
  margin: 50px auto 0;
  border-radius: 10px;
  padding: 2em;
  @media screen and (max-width: 900px) {
    margin: 50px 1em;
  }
`;

const Title = styled.h2`
  font-family: "roboto slab", monospace;
  text-align: center;
  margin: 10px 0;
`;

const SmallText = styled.span`
  text-align: center;
  color: ${(props) => props.theme.colors.text.secondary};
  display: block;
  margin: 10px 0;
  font-size: 0.9rem;
`;

const Landing = (props) => {
  return (
    <>
      <Container>
        <Title>Przeglądaj plany</Title>
        <SmallText>Zaloguj się, aby łatwo wracać do swojego planu</SmallText>
        <YearSelector />
      </Container>
    </>
  );
};

export default Landing;
