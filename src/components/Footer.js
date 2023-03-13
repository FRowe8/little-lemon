import './Footer.css'
import footerLogo from '../logo_footer.png'

function Footer() {
  return (
    <footer className="doormat-nav">
      <figure>
        <img className="footer-logo" src={footerLogo} alt="logo" />
      </figure>
      <section>
        <h3>Doormat Navigation</h3>
        <ul className="doormat-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order_online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <ul className="doormat-links">
          <li>
            <a href="/address">Address</a>
          </li>
          <li>
            <a href="/phone_number">Phone Number</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>Social Media Links</h3>
        <ul className="doormat-links">
          <li>
            <a href="/address">Address</a>
          </li>
          <li>
            <a href="/phone_number">Phone Number</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
