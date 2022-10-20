import { useState } from 'react'

import './App.css'

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
  }).catch(alert('Ocorreu um erro'))
setvalue("")
}

  return (
    <div className="App">
     
      <main className='main'>
      <h1>Buscador de Cep</h1>
      <div className='form'>
<input  type="text" placeholder='digite um Cep' value={value} onChange={(e)=>setvalue(e.target.value)} />

<button className='btn' onClick={GetCep}>Buscar</button>
    
</div>
{value &&(
<section className='results' >
<span className='item'>{cep.logradouro}</span> 
<span className='item'>{cep.complemento}</span> 
<span className='item'>{cep.bairro}</span> 
<span className='item'>{cep.localidade} {cep.uf}</span>
</section>)}
</main>
</div>
)
      
  
}

export default App
