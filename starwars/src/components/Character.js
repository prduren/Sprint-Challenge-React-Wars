import React from "react";
import styled from "styled-components";

function Character({ char }) {
  return (
    <StyledDiv>
      <h2>{char.name}</h2>
      <p>Height: {char.height}</p>
      <p>Gender: {char.gender}</p>
      <p>Birth Year: {char.birth_year}</p>
      <p>Skin Color: {char.skin_color}</p>
      <p>Hair Color: {char.hair_color}</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  border: 2px solid black;
  width: 20rem;
  height: 30rem;
  margin: 2rem;
  font-size: 16px;
  color: black;
  background: #bcc8c1;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export default Character;
