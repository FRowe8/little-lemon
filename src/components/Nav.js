import './Nav.css'
import hamburger from '../🦆 icon _hamburger menu.svg'
import Menu from './Menu'
import MenuItem from './MenuItem'
import { useState } from 'react'

function Nav() {
  const [showMenu, setShowMenu] = useState(false)

  const menu = [
    'Home',
    'About',
    'Menu',
    'Reservations',
    'Order Online',
    'Login',
  ]
  const menuItems = menu.map((val, index) => {
    return <MenuItem key={index}>{val}</MenuItem>
  })

  return (
    <>
      <nav className="nav">
        {showMenu && <Menu>{menuItems}</Menu>}
        <ul>
          <li>
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="/menu">
              Menu
            </a>
          </li>
          <li>
            <a className="nav-link" href="/reservations">
              Reservations
            </a>
          </li>
          <li>
            <a className="nav-link" href="/order_online">
              Order Online
            </a>
          </li>
          <li>
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <img
            className="icon"
            src={hamburger}
            alt="Navigation Icon"
            onClick={() => setShowMenu(!showMenu)}
          />
        </ul>
      </nav>
    </>
  )
}

export default Nav
