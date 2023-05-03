import './BookingConfirmation.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function BookingConfirmation(props) {
  const location = useLocation()
  const data = location.state

  const dateFormatted = data.bookingDate.split('-')

  return (
    <div className="booking-confirmation-section">
      <h1>Thank you for your Booking!</h1>
      <h2>Booking Details</h2>
      <div className="booking-details">
        <h3>
          We look forward to seeing {data.diners} of you on {dateFormatted[2]}/
          {dateFormatted[1]}/{dateFormatted[0]} at {data.bookingTime}.
        </h3>
        <h3>You have requested {data.seatingOption} seating.</h3>
        <h3>Call us on 0800 002211 if you need to make any changes.</h3>
      </div>
      <Link to="/" className="nav-link">
        <button className="home-button">Return Home</button>
      </Link>
    </div>
  )
}

export default BookingConfirmation
