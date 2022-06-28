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
    <AttributeDiv>
      <p>Strength: {strength}</p> <DiceRoller setAtt={setStrength} />
      <p>Dexterity: {dexterity}</p> <DiceRoller setAtt={setDexterity} />
      <p>Constitution: {constitution}</p> <DiceRoller setAtt={setConstitution} />
      <p>Intelligence: {intelligence}</p> <DiceRoller setAtt={setIntelligence} />
      <p>Wisdom: {wisdom}</p> <DiceRoller setAtt={setWisdom} />
      <p>Charisma: {charisma}</p> <DiceRoller setAtt={setCharisma} />
    </AttributeDiv>
  );
};

export default Attributes;

const AttributeDiv = styled.div`
  font-family: 'MedievalSharp', cursive;
  display: flex;
  flex-flow: wrap;
`;