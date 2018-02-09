import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../containers/search'

const Header = () => (
    <header className="header">
    <nav className="nav-container">
      <div className="nav-left">
        <Link to='/' className="nav-home" exact>TreeMe</Link>
      </div>
      <div className="nav-right">
        <ul className="nav-right ul">
            <li><Link to='/auth/login' className="nav-link">Login</Link></li>
            <li><Link to='/auth/signup' className="nav-link">Signup</Link></li>
        </ul>

      </div>
    </nav>
  </header>
)

export default Header