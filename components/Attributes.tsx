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
    <AttributeHeader>Attributes:</AttributeHeader>
    <AttributeDiv>
      <SingleAttribute>Strength: {strength}</SingleAttribute> <DiceRoller setAtt={setStrength} />
      <SingleAttribute>Dexterity: {dexterity}</SingleAttribute> <DiceRoller setAtt={setDexterity} />
      <SingleAttribute>Constitution: {constitution}</SingleAttribute> <DiceRoller setAtt={setConstitution} />
      <SingleAttribute>Intelligence: {intelligence}</SingleAttribute> <DiceRoller setAtt={setIntelligence} />
      <SingleAttribute>Wisdom: {wisdom}</SingleAttribute> <DiceRoller setAtt={setWisdom} />
      <SingleAttribute>Charisma: {charisma}</SingleAttribute> <DiceRoller setAtt={setCharisma} />
      </AttributeDiv>
    </>
  );
};

export default Attributes;

const AttributeDiv = styled.div`
  font-family: 'MedievalSharp', cursive;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const AttributeHeader = styled.p`
  font-family: 'MedievalSharp', cursive;
  font-size: 1.5rem;
  text-align: center;
`;
const SingleAttribute = styled.p`
  width: 50%;
`;