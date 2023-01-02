import { Link } from 'react-router-dom'
const Header = () => {
  
  return(
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/page-2">Page 2</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
          <li><Link to="/fake">fake</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;