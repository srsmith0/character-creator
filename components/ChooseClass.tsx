import * as React from 'react';
import axios from 'axios';

const ChooseClass = ({ klass, setKlass }) => {
  const [klasses, setKlasses] = React.useState([]);
  const [klassData, setKlassData] = React.useState({})
  
  React.useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/classes/")
    .then((res) => {
      let klasses = res.data.results;
      let klassArray = [];
      //only takes name from GET request and creates new array
      for (let i = 0; i < klasses.length; i++) {
        klassArray.push(klasses[i].name);
      };
      setKlasses(klassArray);
    });

  }, []);

  const handleKlassChange = (e) => {
    const newKlass = e.target.value;
    setKlass(newKlass);
    getKlassData(newKlass)
  };

  const getKlassData = (selectedKlass) => {
    let index = selectedKlass.toLowerCase();
    axios.get(`https://www.dnd5eapi.co/api/classes/${index}`)
      .then((res) => {
        setKlassData(res.data);
      }
    )
  };

  const displayKlassData = () => {
    console.log(klassData)
    return (
      <>
        <h1>{klassData.name}{klassData.hit_die}</h1>
      </>
    )
  }
          
  return (
    <>
      <div>Choose Class:</div>
      {klasses.map((kla, index) => (
        <div key={kla}>
            <input
              value={kla}
              id={kla}
              name="charKlass"
              type="radio"
              checked={klass === kla}
              onChange={handleKlassChange}
          />
            <label key={index} htmlFor={kla}>
            {kla}
          </label>
          </div>
          ))}
          {displayKlassData()}
    </>
  );
};

export default ChooseClass;