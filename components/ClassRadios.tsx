import react, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassRadios = ({ profession, setProfession, selectedClass, setSelectedClass }) => {
  
  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/classes/")
    .then((res) => {
      let classes = res.data.results;
      let classArray = [];
      //only takes name from GET request and creates new array
      for (let i = 0; i < classes.length; i++) {
        classArray.push(classes[i].name);
      };
      setProfession(classArray);
      console.log(profession);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedClass)
  }

  const handleClassChange = (e) => {
    const newClass = e.target.value;
    setSelectedClass(newClass);
  }
          
  return (
    <>
      <form onSubmit={handleSubmit}>
        {profession.map((prof, index) => (
            <label key={index}>
              <input
                value={prof}
                id={prof}
                name="char_class"
                type="radio"
                checked={selectedClass === prof}
                onChange={handleClassChange}
                />
            {prof}
            </label>
          ))}
        <input type="submit" />
      </form>
    </>
  );
};

export default ClassRadios;