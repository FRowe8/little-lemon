import logo from '../Logo.svg'
import Nav from './Nav'
import './Header.css'

function Header() {
  return (
    <header className="header-layout">
      <img src={logo} width={200} height={200} alt="little lemon logo" />
      <Nav />
    </header>
  )
}

export default Header
