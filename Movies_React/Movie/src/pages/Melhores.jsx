import { useEffect, useState } from "react";
import { Data } from "../components/Data";
import { HeaderElement } from "../components/HeaderElement";
import { Key } from "../components/key";
export function Melhores(){
  const [best,setbest]=  useState([])
  const image_path='https://image.tmdb.org/t/p/w500'
  useEffect(function(){
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=pt-BR&page=1`)
    .then(response=>response.json())
    .then(res=> setbest(res.results))
  },[])
    return (
<div className="App">
<HeaderElement/>
<div className="title">
  <h1>Melhores Avaliados</h1>
</div>
<main className="main">
{best.map(function(i){
    return <Data id={i.id} name={i.title} img={`${image_path}${i.poster_path}`} />
})}
</main>
</div>

    )
}