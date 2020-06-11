import React, {Fragment, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

//Components
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  margin-top: 5rem;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  const [frase, setFrase] = useState({});  

  
  const consultarAPI = () => {
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      .then(res => res.json())
      .then(data => {
        setFrase(data[0]);
      })
      .catch(error => console.log(error)
      )
  }

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Fragment>
      <Contenedor>
      <Frase 
        frase={frase}
      />  
      <Boton
        onClick={consultarAPI}
      >
        Obtener frase
      </Boton>  
      </Contenedor>
    </Fragment>
  );
}

export default App;
