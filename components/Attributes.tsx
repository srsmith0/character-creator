import * as React from 'react';
import DiceRoller from '../utils/DiceRoller';
import styled from 'styled-components';

const Attributes = ({ klass }) => {
  const [strength, setStrength] = React.useState('');
  const [dexterity, setDexterity] = React.useState('');
  const [constitution, setConstitution] = React.useState('');
  const [intelligence, setIntelligence] = React.useState('');
  const [wisdom, setWisdom] = React.useState('');
  const [charisma, setCharisma] = React.useState('');

  return (
    <>
      <AttributeDiv>
        <AttributeHeader>Attributes:</AttributeHeader>
          <SingleAttribute>Strength: {strength} <DiceRoller setAtt={setStrength} /> </SingleAttribute>
          <SingleAttribute>Dexterity: {dexterity} <DiceRoller setAtt={setDexterity} /> </SingleAttribute>
          <SingleAttribute>Constitution: {constitution} <DiceRoller setAtt={setConstitution} /> </SingleAttribute>
          <SingleAttribute>Intelligence: {intelligence} <DiceRoller setAtt={setIntelligence} /> </SingleAttribute>
          <SingleAttribute>Wisdom: {wisdom} <DiceRoller setAtt={setWisdom} /> </SingleAttribute>
          <SingleAttribute>Charisma: {charisma}<DiceRoller setAtt={setCharisma} /> </SingleAttribute>
      </AttributeDiv>
    </>
  );
};

export default Attributes;

const AttributeDiv = styled.div`
  font-family: 'MedievalSharp', cursive;
  display: flex;
  flex-flow: wrap column;
  text-align: center;
  float: left;
  width: 33%;
`;

const AttributeHeader = styled.p`
  font-family: 'MedievalSharp', cursive;
  font-size: 1.5rem;
  text-align: center;
`;
const SingleAttribute = styled.span`
  text-align: center;
  margin-bottom: 1rem;
`;