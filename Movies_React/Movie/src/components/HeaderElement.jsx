import './Header.css'
import { Link } from 'react-router-dom'
export function HeaderElement(){
    return (<div>
     <header className='header'>
<nav className='navbar'>
<ul className='list'>
 <Link className='item' to='/'>Filmes Populares</Link>
 <Link className='item' to='/Melhores'>Melhores Qualificados</Link>
</ul>


</nav>

      </header>
    </div>)
}