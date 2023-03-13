import './MenuItem.css'

function MenuItem(props) {
  return (
    <div className="menu-item-container">
      <div className="menuItem">{props.children}</div>
      <div className="line" />
    </div>
  )
}

export default MenuItem
