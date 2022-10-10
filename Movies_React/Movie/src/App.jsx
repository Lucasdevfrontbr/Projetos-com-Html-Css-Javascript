import { useState, useEffect } from 'react'
import { Key } from './components/key.js'
import './App.css'
import { Data } from './components/Data'
import{HeaderElement} from './components/HeaderElement'
function App() {
  const [movies, setmovies] = useState([])
  const image_path='https://image.tmdb.org/t/p/w500'
useEffect(function(){
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=pt-BR&page=1`)
.then(response=>response.json())
.then(res=> setmovies(res.results))
},[])
  return (
    <div className="App">
 <HeaderElement/>
<div className='title'>
  <h1>Filmes Populares</h1>
</div>
    <main className='main'>
     
{movies.map((movie)=>{
return <Data name={movie.title} img={`${image_path}${movie.poster_path}`}/>
})}


    </main>
    </div>
  )
}

export default App
