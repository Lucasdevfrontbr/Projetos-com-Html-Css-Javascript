import './Header.css'
export function HeaderElement(){
    return (<div>
     <header className='header'>
<nav className='navbar'>
<ul className='list'>
<a className='item' href="/">
  <li>Filmes Populares</li>
</a>
<a className='item' href="/Melhores">
  <li>Melhores Qualificados</li>
</a>
</ul>


</nav>

      </header>
    </div>)
}