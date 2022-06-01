import * as React from 'react';
import styled from 'styled-components';

const Home = () => {

  const TitleBackground = styled.div`
    background-color: grey;

  `
  const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
  `
  return (
    <>
    <TitleBackground>
        <Title>RPG Character Creator</Title>
    </TitleBackground>
      
    </>
      );
};

export default Home;