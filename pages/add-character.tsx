import * as React from 'react';
import ClassRadios from '../components/ClassRadios';
import ChooseAlignment from '../components/ChooseAlignment';

const AddCharacter = () => {
  const [klass, setKlass] = React.useState([]);
  const [selectedKlass, setSelectedKlass] = React.useState("");
  const [alignment, setAlignment] = React.useState([]);
  const [selectedAlignment, setSelectedAlignment] = React.useState("");

  
  let char = {
    klass,
    alignment: selectedAlignment,
    
  };
          
  const handleSubmit = (e) => {
    e.preventDefault;
    console.log(selectedAlignment)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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