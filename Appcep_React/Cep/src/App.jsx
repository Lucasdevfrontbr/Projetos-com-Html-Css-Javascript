import { useState } from 'react'
import Res from './Res'
import './App.css'
import { Datacontext } from './Datacontext'

function App() {
  const [value, setvalue] = useState('')
  const [cep, setcep] = useState({})
  function GetCep(){
if(value===''){
alert('digite um valor valido')
return
  }
  fetch(`https://viacep.com.br/ws/${value}/json/`)
  .then(function(response){
    return response.json()

  })
 .then(res=>{
setcep(res)
  })
}

  return (
    <div className="App">
     
      <main className='main'>
      <h1>Buscador de Cep</h1>
      <div className='form'>
<input  type="text" placeholder='Digite um Cep' value={value} onChange={(e)=>setvalue(e.target.value)} />

<button className='btn' onClick={GetCep}>Buscar</button>
    
</div>
<Datacontext.Provider value={{cep,setcep, value,setvalue}}>
<Res/>
    </Datacontext.Provider>


</main>
</div>
)
      
  
}

export default App
