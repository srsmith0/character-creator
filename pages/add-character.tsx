import react, { useState } from 'react';

import ClassRadios from '../components/ClassRadios';

const AddCharacter = () => {
  const [profession, setProfession] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
          
  return (
    <>
      <ClassRadios
        profession={profession}
        setProfession={setProfession}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
    </>
  );
};

export default AddCharacter;