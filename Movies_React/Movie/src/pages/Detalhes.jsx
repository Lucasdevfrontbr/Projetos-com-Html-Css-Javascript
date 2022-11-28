import styled from "styled-components"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Key } from "../components/key"
import { Link } from "react-router-dom"
import './Detalhes.css'

const Container=styled.div`
min-height: 94vh;
        display: flex;
        flex-direction: column;
        background: black;
        width: 96.5%;
`

const Main=styled.main`
display: flex;
flex-direction: column;
background: black;
`

const Img=styled.section`
display: flex;
justify-content: center;
margin-right: 2rem;

@media (max-width: 400px){
   margin-top:8rem;
{
`

const Title=styled.span`
font-size: 1.5em;
margin-bottom: 0.5rem;
margin-right: 2rem;
`

const Resumo=styled.span`
margin-right: 2rem;

`
const Btn=styled.span`
display: flex;
justify-content: center;
margin-top: 0.5rem;
margin-right: 2rem;
`
const Button=styled.button`
background: red;
font-family: sans-serif;
padding: 1rem;
border-radius: 10px;
cursor:pointer;
`
const Ano=styled.span`
margin-right: 2rem;
`
export function Detalhes(){
 const {id}=useParams()
 const [detalhes,setdetalhes]=useState({})
 const image_path='https://image.tmdb.org/t/p/w500'
 useEffect(function(){
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Key}&language=pt-BR&page=1`)
    .then(response=>response.json())
    .then(e=>{ 
        const detalhes={
        id,
        title:e.title,
        sinopse:e.overview,
image:`${image_path}${e.poster_path}`,
ano:e.release_date
        }
        setdetalhes(detalhes)
 })
 },[id])
    return (
  
<Container className="container">

    <Main className="main">
        <Img className="img"> 
            <img src={detalhes.image} alt="" />
        </Img>
                <Title className="title">{detalhes.title}</Title>
            <Resumo className="resumo">
                <span>{detalhes.sinopse}</span>
                </Resumo>
            <Ano>{detalhes.ano}</Ano>
            <Btn className="btn"><Link to="/"><Button>Voltar</Button></Link></Btn>
           
    </Main>

</Container>

 
    )
}