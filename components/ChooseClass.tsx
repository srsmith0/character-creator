import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ChooseClass = ({ klass, setKlass }) => {
  const [klasses, setKlasses] = React.useState([]);
  const [klassData, setKlassData] = React.useState([])
  

  //TODO: make modal giving information on classes, add class button.  Pick proficiencies from there
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
          
  if (klassData === []) {
    return <FormatText>Loading...</FormatText>;
  }
  return (
  <>
    <ChooseKlass>Choose Class:</ChooseKlass>
    <ClassRadios>
    {klasses.map((kla, index) => (
      <Klass key={kla}>
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
        </Klass>
    ))}
      </ClassRadios>
    </>
  )
};

export default ChooseClass;

const ChooseKlass = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;

const ClassRadios = styled.div`
  display: flex;
  flex-flow: wrap;
  text-align: center;
`;

const Klass = styled.div`
  width: 25%;
`;

const FormatText = styled.div`
  font-family: 'MedievalSharp', cursive;
  text-align:center;
`;