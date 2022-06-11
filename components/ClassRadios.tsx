import * as React from 'react';
import axios from '../node_modules/axios/index';

const ClassRadios = ({ klass, setKlass, selectedKlass, setSelectedKlass }) => {
  
  React.useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/classes/")
    .then((res) => {
      let klasses = res.data.results;
      let klassArray = [];
      //only takes name from GET request and creates new array
      for (let i = 0; i < klasses.length; i++) {
        klassArray.push(klasses[i].name);
      };
      setKlass(klassArray);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedKlass)
  }

  const handleKlassChange = (e) => {
    const newKlass = e.target.value;
    setSelectedKlass(newKlass);
  }
          
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <div>Choose Class:</div>
      {klass.map((klass, index) => (
        <div key={klass}>
            <input
              value={klass}
              id={klass}
              name="char_klass"
              type="radio"
              checked={selectedKlass === klass}
              onChange={handleKlassChange}
          />
            <label key={index} htmlFor={klass}>
            {klass}
            </label>
          </div>
          ))}
        {/* <input type="submit" /> */}
      {/* </form> */}
    </>
  );
};

export default ClassRadios;