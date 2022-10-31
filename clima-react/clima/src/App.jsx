import { useState } from 'react'
import APIkey from './APIkey'
function App() {
  const [city, setcity] = useState('')
  const [name, setname] = useState('')
  const [weather, setweather] = useState({})
  const [main, setmain]=useState({})
  function getcity(){
    if(city===''){
      alert(' Por favor,digite um valor valido')
return
  }
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric&lang=pt_br`)
  .then(function(response){
     return response.json()
  })
 .then(res=>{
setname(res.name)
setweather(res.weather[0])
setmain(res.main)
setcity('')
})}
let icon=`http://openweathermap.org/img/wn/${weather.icon}@2x.png`
  return (
    <div className="App">
      <header className='header'>
<input type="text" placeholder='Nome da cidade' value={city} onChange={(e)=>setcity(e.target.value)} />
<button onClick={getcity}>Buscar</button>
      </header>
      <main className='main'>
<span className='name'>{name}</span>
<span><img src={icon} alt="" /></span>
<span className='temp'>{main.temp}</span> {main.temp>0&&(<span className='cel'>°C</span>)}
<span className='description'>{weather.description}</span>
      </main>
    </div>
  )
  }

export default App
