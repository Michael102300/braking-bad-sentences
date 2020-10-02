import React, {useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Sentence from './components/Sentence';

const Btn = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .3s ease;
  border-radius: 20px;

  :hover {
    cursor: pointer;
    background-size: 400;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {

  const [ sentence, setSentence ] = useState({})

  useEffect(() => {
    consultarApi();
  }, [])

  const consultarApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const sentence = await api.json();
    setSentence(sentence[0]);
  }
  return (
    <Container>

      <Sentence 
        sentence={sentence}
      />
      <Btn
        onClick={consultarApi}
      >
        Obtener frase
      </Btn>
    </Container>
  );
}

export default App;
