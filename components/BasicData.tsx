import * as React from 'react';
import { getSystemErrorName } from 'util';

const BasicData = ({name, setName, race, setRace, sex, setSex}) => {

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
    </>
  )
};

export default BasicData;