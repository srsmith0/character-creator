import * as React from 'react';
import styled from 'styled-components';

const ChooseProficiencies = ({ klassData }) => {
  const [profs, setProfs] = React.useState('Choose a Class');

  React.useEffect(() => {
    console.log(klassData);
    if (klassData != 'Choose a Class') {
      let optionDataArray = klassData.proficiency_choices[0].from.options
      let choicesArray = optionDataArray.map(
        (choice => choice.item.name.split('Skill: ')[1])
      )
      setProfs(choicesArray);
    }
  }, [klassData]);

  const displayProficiencies = () => {
    return profs === 'Choose a Class' ? profs : profs.map((p => <p key={p}>{p}</p>));
  };
  
  if (profs === undefined) {
    return (
      <>
        <p>Choose a class</p>
      </>
    );
  }
  else {
    return (
      <>
        <ProfsDiv>
        <Header>Skills:</Header>
        {displayProficiencies()}
        </ProfsDiv>
      </>
        
    );

  };
};

export default ChooseProficiencies;

const ProfsDiv = styled.div`
  font-family: 'MedievalSharp', cursive;
  display: flex;
  flex-flow: wrap column;
  text-align: center;
  float: left;
  width: 33%;
`;

const Header = styled.p`
  font-family: 'MedievalSharp', cursive;
  font-size: 1.5rem;
  text-align: center;
`;