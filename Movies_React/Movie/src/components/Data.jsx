import './Data.css'
import { Link } from 'react-router-dom'
export function Data(props){
   return(<div className='container'>
   
<span>{props.name}</span>
<Link to={`/detalhes/${props.id}`}><img src={props.img} alt={props.name} /></Link>
    </div>)
}