import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ChooseClass = ({ klass, setKlass, klassData, setKlassData }) => {
  const [klasses, setKlasses] = React.useState([]);
  const [profs, setProfs] = React.useState([]);

  React.useEffect(() => {
    getKlasses();
  }, []);

  const getKlasses = () => {
    axios.get("https://www.dnd5eapi.co/api/classes/")
      .then((res) => {
        let klasses = res.data.results;
        let klassArray = [];
        //only takes name from GET request and creates new array
        for (let i = 0; i < klasses.length; i++) {
          klassArray.push(klasses[i].name);
        };
        setKlasses(klassArray)
      });
};
  
  const handleKlassChange = (e) => {
    const newKlass = e.target.value;
    setKlass(newKlass);
    getKlassData(newKlass);
  };

  const getKlassData = (selectedKlass) => {
    let index = selectedKlass.toLowerCase();
    axios.get(`https://www.dnd5eapi.co/api/classes/${index}`)
      .then((res) => {
        setKlassData(res.data);
        setProfs(res.data.proficiencies)
      }
    );
  };

  const displayProficiencies = () => {
    if (typeof klassData === 'string') {
      return klassData;
    }
    //removes saving throws from proficiencies if listed
    let formattedProfs = profs.filter(prof => prof.name.length < 17)
    return formattedProfs.map(pro => <p key={pro.index}>{pro.name}</p>)
  };
          
  if (klasses.length === 0) {
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
              // checked={klass === kla}
              onChange={handleKlassChange}
          />
            <label key={index} htmlFor={kla}>
            {kla}
          </label>
          </Klass>
      ))}
        </ClassRadios>
        <Proficiencies>
          <h3>Proficiencies:</h3>
          {displayProficiencies()}
        </Proficiencies>
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
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

const Klass = styled.div`
  width: 33%;
`;

const FormatText = styled.div`
  font-family: 'MedievalSharp', cursive;
  text-align:center;
`;

const Proficiencies = styled.div`
  text-align: center;
  float: left;
  width: 33%
`;