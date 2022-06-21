import * as React from 'react';
import ChooseClass from '../components/ChooseClass';
import ChooseAlignment from '../components/ChooseAlignment';
import BasicData from '../components/BasicData';
import DiceRoller from '../utils/DiceRoller';

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
          
  const handleSubmit = (e) => {
    e.preventDefault;
    document.getElementById("charForm").reset()
  }

  return (
    <>
      <form id="charForm" onSubmit={handleSubmit}>
        <BasicData
          name={name}
          setName={setName}
          setSex={setSex}
          race={race}
          setRace={setRace}
        />
        <ChooseAlignment
          alignment={alignment}
          setAlignment={setAlignment}
        />
        <ChooseClass
          klass={klass}
          setKlass={setKlass}
        />
        <input type="submit" />
      </form>
      <DiceRoller />
    </>
  );
};

export default AddCharacter;