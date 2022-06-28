import * as React from 'react';
import styled from 'styled-components';

const DiceRoller = ({setAtt}) => {
  
  const getRandomRoll = () => {
    return Math.ceil(Math.random() * 6);
  };
  
  const getAttributeValue = () => {
    let rollValues = []
    //rolls 4 d6 to get attribute values
    for (let i = 0; i < 4; i++) {
      rollValues.push(getRandomRoll());
    };
    //drops the lowest value roll and adds the 3 highest rolls
    rollValues.sort().shift();
    let value = rollValues[0] + rollValues[1] + rollValues[2]
    return setAtt(value)
  };

  return <RollButton onClick={getAttributeValue}>Random Value</RollButton>;
};

const RollButton = styled.button`

`

export default DiceRoller;