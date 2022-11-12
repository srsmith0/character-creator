import * as React from 'react';
import styled from 'styled-components';
import ChooseClass from '../components/ChooseClass';
import BasicData from '../components/BasicData';
import DiceRoller from '../utils/DiceRoller';
import Attributes from '../components/Attributes';
import ChooseProficiencies from '../components/ChooseProciencies';

const AddCharacter = () => {
  const [name, setName] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [race, setRace] = React.useState("Dragonborn");
  const [klass, setKlass] = React.useState("");
  const [alignment, setAlignment] = React.useState("Chaotic Evil");
  const [klassData, setKlassData] = React.useState('Choose a Class');
  
  //use variable to export character info to a final sheet
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
          klassData={klassData}
          setKlassData={setKlassData}
          />
      </FormatText>
      <Attributes klass={klass} />
      <ChooseProficiencies klassData={klassData} />
    </>
  );
};

export default AddCharacter;

const FormatText = styled.div`
font-family: 'MedievalSharp', cursive;
`;


