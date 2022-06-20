import * as React from 'react';
import axios from 'axios';

const ChooseRace = ({race, setRace}) => {
  const [raceArray, setRaceArray] = React.useState([]);
  
  //TODO: make basic picks and add more info once MVP
  //TODO: pick race, then make modal giving details and button to add.  Racial abilities + language
  React.useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/races/")
      .then(res => {
        let races = res.data.results;
        debugger;
        let racesArray = [];
        //only takes name from GET request and creates new array
        for (let i = 0; i < races.length; i++) {
          racesArray.push(races[i].name);
        };
        setRaceArray(racesArray);
      });
  }, []);

    const createRaceNames = () => {
    let raceNameArray = [];
    for (let i = 0; i < raceArray.length; i++) {
      raceNameArray.push(raceArray[i].name);
    };
    return (
      <select value={race} onChange={handleChange}>
        {raceArray.map(r => <option id={r} key={r} value={r}>{r}</option>)}
       </select>
       ) 
  };
        
  const handleChange = (e) => {
    setRace(e.target.value);
  };

  return (
    <div>
      Choose Race:
      {createRaceNames()}
    </div>
  );
};

export default ChooseRace;