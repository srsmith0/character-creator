import axios from 'axios';
import * as React from 'react';
import ChooseRace from './ChooseRace';

const BasicData = ({ name, setName, race, setRace, setSex }) => {

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
      {nameInput()}
      {chooseSex()}
      <ChooseRace
        race={race}
        setRace={setRace} />
    </>
  )
};

export default BasicData;