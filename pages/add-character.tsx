import * as React from 'react';
import ClassRadios from '../components/ClassRadios';
import ChooseAlignment from '../components/ChooseAlignment';
import BasicData from '../components/BasicData';

const AddCharacter = () => {
  const [name, setName] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [race, setRace] = React.useState("");
  const [klass, setKlass] = React.useState([]);
  const [selectedKlass, setSelectedKlass] = React.useState("Chaotic Evil");
  const [alignment, setAlignment] = React.useState([]);
  const [selectedAlignment, setSelectedAlignment] = React.useState("");

  
  let char = {
    name,
    race,
    sex,
    klass: selectedKlass,
    alignment: selectedAlignment,

  };
          
  const handleSubmit = (e) => {
    e.preventDefault;
    console.log(char)
    debugger;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <BasicData
          name={name}
          setName={setName}
          sex={sex}
          setSex={setSex}
          race={race}
          setRace={setRace}
        />
        <ClassRadios
          klass={klass}
          setKlass={setKlass}
          selectedKlass={selectedKlass}
          setSelectedKlass={setSelectedKlass}
        />
        <ChooseAlignment
          alignment={alignment}
          setAlignment={setAlignment}
          selectedAlignment={selectedAlignment}
          setSelectedAlighment={setSelectedAlignment}
          />
        <input type="submit" />
      </form>
    </>
  );
};

export default AddCharacter;