import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Band } from './Band'
const Container=styled.div`
min-height: 10vh;
background: white;
        width: 100%;
        font-family:sans-serif;
        padding-top:5rem;
`
const Title=styled.h1`
display:flex;
justify-content:center;
align-items:center;

`
const Main=styled.main`
 background: white;
display:flex;
justify-content:center;
align-items:center;
height:80vh;
flex-wrap:wrap;
`


function App() {
  const [band, setband] = useState([])
  useEffect(function(){
    fetch('https://bandas-lucasdevfrontbr.vercel.app/')
    .then(response=>response.json())
    .then(res=>setband((res)))
  },[])

  return (

   
     <Container>
      <Title>Bandas favoritas</Title>
     <Main>
       {band.map(function(i){
      return <Band img={i.img} name={i.name} country={i.country}/>
       })}
     </Main>
     </Container>

  )
}

export default App
