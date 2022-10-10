import './Data.css'
export function Data(props){
   return(<div className='container'>
   
<span>{props.name}</span>
<img src={props.img} alt={props.name} />
    </div>)
}