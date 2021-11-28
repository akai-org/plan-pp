import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "../../../components/UI/Accordion";

const GridContainer = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

// Tymczasowy placeholder żeby prztestować funkcjonalność zwijania i rozwijania sekcji
const SampleContent = (
  <GridContainer>
    <span style={{ gridColumn: "1/5" }}>Kierunek 1</span>
    <a href="#">Rok 1</a>
    <a href="#">Rok 2</a>
    <a href="#">Rok 3</a>
    <a href="#">Rok 4</a>
  </GridContainer>
);

// Dane tymczasowe, docelowo mają być pobierane z bazy danych
const departaments = [
  "Wydział Architektury",
  "Wydział Automatyki, Robotyki i Elektroniki",
  "Wydział Informatyki i Telekomunikacji",
  "Wydział Inżynierii Lądaowej i transportu",
  "Wydział Inżynierii Matriałowej i Fizyki Technicznej",
  "Wydział Inżynierii Mechanicznej",
  "Wydział Inżynierii Środowiska i Energetyki",
  "Wydział Inżynierii Zarządzania",
  "Wydzał Technologii Chemicznej",
];

const YearSelector = (props) => {
  const [expandedSection, setExpandedSection] = useState(-1);

  const handleToggleSection = (sectionIndex) => {
    if (sectionIndex === expandedSection) {
      setExpandedSection(-1);
    } else {
      setExpandedSection(sectionIndex);
    }
  };

  return (
    <div>
      {departaments.map((departament, index) => (
        <Accordion
          key={departament}
          label={departament}
          onClick={() => handleToggleSection(index)}
          expanded={index === expandedSection}
        >
          {SampleContent}
        </Accordion>
      ))}
    </div>
  );
};

export default YearSelector;
