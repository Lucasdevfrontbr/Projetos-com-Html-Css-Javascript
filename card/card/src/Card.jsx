import React, { useState } from 'react';
import styled from 'styled-components'

const Descri=styled.p`
text-align:center;
margin-top:1rem;
`
const Info=styled.p`
text-align:center;
margin-top:1rem;
`
const Container=styled.div`
font-family:sans-serif;
min-height:12rem;
width:16rem;
display: flex;
flex-direction:column;
background: #faf6f6;
margin-right:1rem;
border-radius:5px;
-webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 41px 11px 11px rgba(0,0,0,0); 
box-shadow: 0px 10px 13px -7px #000000, 5px 41px 11px 11px rgba(0,0,0,0);
`
const Title=styled.h1`
margin-top:1rem;
text-align:center;
`
export function Card() {
  const [showInfo, setShowInfo] = useState(false);
  const [showdescri,setshowdescri]=useState(true);
function handlemouseenter(){
    setShowInfo(true)
    setshowdescri(false)
}
function handlemouseleave(){
    setShowInfo(false)
    setshowdescri(true)
}
  return (
    
    <Container
      onMouseEnter={handlemouseenter}
      onMouseLeave={handlemouseleave}
    >
      <Title>Título do card</Title>
      {showdescri &&<Descri>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eum sapiente ab iure omnis molestiae, iste dolorem ut dicta quo sit sunt quae quasi est eligendi laborum!</Descri>}
      {showInfo && <Info>Informações adicionais</Info>}
    </Container>
    
  );
}