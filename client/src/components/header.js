import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../containers/search'

const Header = () => (
  <header>
    <nav className="navbar">
      <div className="navbar-left">
        <Link to='/' className="nav-home">Home</Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-right-dropdown">
          <li className="nav-item">
            <li><Link to='/signup' className="nav-link">Signup</Link></li>
          </li>
          <li className="nav-item">
            <li><Link to='/login' className="nav-link">Login</Link></li>
          </li>
        </ul>

      </div>
    </nav>
  </header>
)

export default Header