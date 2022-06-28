import * as React from 'react';
import DiceRoller  from '../utils/DiceRoller';

const Attributes = ({ klass }) => {
  const [strength, setStrength] = React.useState('');
  const [dexterity, setDexterity] = React.useState('');
  const [constitution, setConstitution] = React.useState('');
  const [intelligence, setIntelligence] = React.useState('');
  const [wisdom, setWisdom] = React.useState('');
  const [charisma, setCharisma] = React.useState('');

  return klass;
};

export default Attributes;