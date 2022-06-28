import * as React from 'react';
import styled from 'styled-components';
import ChooseClass from '../components/ChooseClass';
import BasicData from '../components/BasicData';
import DiceRoller from '../utils/DiceRoller';
import Attributes from '../components/Attributes';

const AddCharacter = () => {
  const [name, setName] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [race, setRace] = React.useState("Dragonborn");
  const [klass, setKlass] = React.useState("");
  const [alignment, setAlignment] = React.useState("Chaotic Evil");
  
  let char = {
    name,
    race,
    sex,
    klass,
    alignment,

  };
  
  return (
    <>
        <FormatText>
        <BasicData
          name={name}
          setName={setName}
          setSex={setSex}
          race={race}
          setRace={setRace}
          alignment={alignment}
          setAlignment={setAlignment}
          />
        <ChooseClass
          klass={klass}
          setKlass={setKlass}
          />
      </FormatText>
      <Attributes klass={klass} />
    </>
  );
};

export default AddCharacter;

const FormatText = styled.div`
font-family: 'MedievalSharp', cursive;
`;


