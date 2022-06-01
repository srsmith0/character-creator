import react, { useState } from 'react';
import axios from 'axios';

const AddCharacter = () => {
  const [profession, setProfession] = useState([]);
  
  //TODO: create better variables and add typescript
  const getPros = () => {
    axios.get("https://www.dnd5eapi.co/api/classes/")
      .then((res) => {
        let arr = res.data.results;
        //use res.data.results then for each in array, put .name into new array
        let profArray = [];
        for (let i = 0; i < arr.length; i++) {
          profArray.push(arr[i].name)
        }
        console.log(profArray)
        setProfession(profArray);
      });
  }

  const createClassRadios = () => {
    getPros();
      profession.map(x => {
        // <input key={x.index} type="radio" id={x} name="char_class" value={x}>
          // <label htmlFor={x}>{x}</label><br></br>
        //TODO:won't accept input, says unexpected token.  
        console.log(x);
      })
  }
          
  return (
    <>
      <form>
        
      </form>
    </>
  );
};

export default AddCharacter;