import react, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassRadios = () => {
  const [profession, setProfession] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  
  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/classes/")
    .then((res) => {
      let arr = res.data.results;
      //use res.data.results then for each in array, put .name into new array
      let profArray = [];
      for (let i = 0; i < arr.length; i++) {
        profArray.push(arr[i].name);
      };
      setProfession(profArray);
      console.log(profession);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedClass)
  }

  const handleClassChange = (e) => {
    const newClass = e.target.value;
    console.log(newClass);
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