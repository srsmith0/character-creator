import * as React from 'react';
import { getSystemErrorName } from 'util';

const BasicData = ({name, setName, race, setRace}) => {

  const nameInput = () => {
    return <input
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />;
  };

  return (
    <>
      {nameInput()}
    </>
  )
};

export default BasicData;