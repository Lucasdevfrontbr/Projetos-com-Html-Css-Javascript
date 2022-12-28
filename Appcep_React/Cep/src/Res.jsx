import './App.css'
import { useContext } from "react"
import { Datacontext } from "./Datacontext"
export default function Res(){
const {cep,value}=useContext(Datacontext)
return(
    <div>
{value &&(
<section className='results' >
<span className='item'>{cep.logradouro}</span> 
<span className='item'>{cep.complemento}</span> 
<span className='item'>{cep.bairro}</span> 
<span className='item'>{cep.localidade} {cep.uf}</span>
</section>)}

    </div>
)
}