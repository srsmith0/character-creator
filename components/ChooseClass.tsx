import * as React from 'react';
import axios from 'axios';
//TODO: use index API call to get all class info for character creation
const ChooseClass = ({ klass, setKlass }) => {
  const [klasses, setKlasses] = React.useState([]);
  const [klassProficiencies, setKlassProficiencies] = React.useState({})
  
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
    let proficiencies = {}
    let index = newKlass.toLowerCase();
    klass != "" ? axios.get(`https://www.dnd5eapi.co/api/classes/${index}`)
      .then((res) => {
        console.log(res.data);
      }
    ) : console.log("no klass")
      

  };

  const chooseKlassProficency = () => {

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
    </>
  );
};

export default ChooseClass;