import './Menu.css'

function Menu(props) {
  return (
    <div className="menu-container">
      <div className="menuList">{props.children}</div>
    </div>
  )
}

export default Menu
