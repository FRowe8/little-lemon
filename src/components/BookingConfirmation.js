import { useLocation } from 'react-router-dom'
function BookingConfirmation(props) {
  const location = useLocation()
  const data = location.state

  console.log(data)
  return (
    <div>
      <p>Booking Confirmed</p>
      <p>Confirmation Number: 122</p>
      <p>{data.diners}</p>
      <p>{data.bookingDate}</p>
      <p>{data.occasion}</p>
      <p>{data.seatingOption}</p>
    </div>
  )
}

export default BookingConfirmation
