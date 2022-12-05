import * as React from 'react';
import styled from 'styled-components';

const ChooseProficiencies = ({ klassData }) => {
  const [profs, setProfs] = React.useState('Choose a Class');
  const [choices, setChoices] = React.useState(0)
  //add check ref to checkboxes to allow maximum selections---create state of checkbox name length.
    //create function to check maximum length allowed and check to state.  If over, uncheck the last box

  React.useEffect(() => {
    console.log(klassData);
    if (klassData != 'Choose a Class') {
      let optionDataArray = klassData.proficiency_choices[0].from.options
      let choicesArray = optionDataArray.map(
        (choice => choice.item.name.split('Skill: ')[1])
      )
      setProfs(choicesArray);
      setChoices(klassData.proficiency_choices[0].choose)
    }
  }, [klassData]);

    // return (
    //   <SkillBoxes>
    //     {profs === 'Choose a Class' ? profs :
    //       profs.map((prof, index) => (
    //         <>
    //     <input
    //     value={prof}
    //     key={prof}
    //           id={prof}
    //           name="skills"
    //           type="checkbox"
    //           onClick={ () => checkChoiceNumber()}
    //       />
    //         <label key={index} htmlFor={prof}>
    //         {prof}
    //           </label>
    //           </>
    //       ))
    //     }
    //     </SkillBoxes>)
  };

  const checkChoiceNumber = () => {
    let checkboxes = document.getElementById('checkboxProfs').getElementsByTagName('skills');
    console.log(checkboxes)
    for (let i = 0; i < checkboxes.length; i++) {
      let checkedCount = 0;
      for (let i = 0; i < checkboxes.length; i++) {
        checkedCount += (checkboxes[i].checked) ? 1 : 0;
      }
      if (checkedCount > choices) {
        this.checked = false;
      }
    }
  };
  
  return (
    <>
      <ProfsDiv>
        <Header>Skills:</Header>
        <SubHeader>{!choices ? '' : `Choose ${choices} from: ` }</SubHeader>
        <ListDiv id="checkboxProfs">
          {displayProficiencies()}
          </ListDiv>
      </ProfsDiv>
    </>
  );

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

const ListDiv = styled.div`
  float: left;
  columns: 2;
`;

const SkillBoxes = styled.div`
  margin-bottom: 0.5rem;
`;

const Header = styled.h1`
  font-family: 'MedievalSharp', cursive;
  font-size: 1.5rem;
  text-align: center;
`;

const SubHeader = styled.p`
  font-family: 'MedievalSharp', cursive;
  font-size: 1rem;
  text-align: center;
  border-width: 3px;
  border-color: black:
`;