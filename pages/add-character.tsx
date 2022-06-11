import * as React from 'react';
import ClassRadios from '../components/ClassRadios';
import ChooseAlignment from '../components/ChooseAlignment';
import BasicData from '../components/BasicData';

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
    console.log(char)
    debugger;
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
        <ClassRadios
          klass={klass}
          setKlass={setKlass}
        />
        <ChooseAlignment
          alignment={alignment}
          setAlignment={setAlignment}
          />
        <input type="submit" />
      </form>
    </>
  );
};

export default AddCharacter;