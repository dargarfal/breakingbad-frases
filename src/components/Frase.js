import React, {Fragment} from 'react';
import styled from 'styled-components';



const Contenedor = styled.div`
  max-width: 800px;
  background-color: white;
  text-align: center;
  border-radius: 5px;
  
  @media (min-width: 992px) {
    margin-top: 10rem;
  }
  
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    padding-left: 4rem;
    margin: 1rem 1rem;
    
      &::before {
        content: open-quote;
        color: black;
        position: absolute;
        left: 1rem;
        top: -1rem;
        font-size: 6rem;
      }
    
    }
  
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    text-align: right;
    color: #666;
    margin: 0rem 2rem 1rem 0rem;
  }
`;

const Frase = ({frase}) => {

  return ( 
       
    <Contenedor>
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </Contenedor>
    
   );
}
 
export default Frase;