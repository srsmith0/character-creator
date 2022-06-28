import * as React from 'react';
import styled from 'styled-components';
import ChooseAlignment from './ChooseAlignment';
import ChooseRace from './ChooseRace';

const BasicData = ({ name, setName, race, setRace, setSex, alignment, setAlignment }) => {

  const nameInput = () => {
    return (
      <>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </>
    );
  };

  const chooseSex = () => {
    return (
      <>
        <input
          name="sex"
          value="female"
          id="female"
          type="radio"
          onChange={() => setSex("female")}
        />
        <label htmlFor="female">Female</label>
        <input
          name="sex"
          value="male"
          id="male"
          type="radio"
          onChange={() => setSex("male")}
        />
        <label htmlFor="male">Male</label>
      </>
    );
  };

  return (
    <>
      <NameCenter>
        {nameInput()}
        {chooseSex()}
      </NameCenter>  
      <AlignClass>
        <ChooseRace
          race={race}
          setRace={setRace}
        />
        <ChooseAlignment
          alignment={alignment}
          setAlignment={setAlignment}
        />
      </AlignClass>
    </>
  )
};

export default BasicData;

const NameCenter = styled.div`
  text-align: center;
  padding: 1rem;
`;
const AlignClass = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;