import './BookingPage.css'

import BookingForm from './BookingForm'
import { useState, useReducer } from 'react'

export const initializeTimes = () => {
  let defaultDate = new Date().toISOString().slice(0, 10)

  return [
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
  ]
}

export const updateTimes = (state, action) => {
  //changes availableTimes
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = action.payload
      const newAvailableTimes = getAvailableTimesForDate(selectedDate)
      console.log(newAvailableTimes)
      return newAvailableTimes
    default:
      return state
  }
}

function getAvailableTimesForDate(date) {
  console.log(date)
  // TODO: get available times for the selected date
  // This is where you would implement the logic to fetch available times
  // based on the selected date from a database or API
  return ['1:00 PM', '1:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM']
}

function BookingPage() {
  const [formOptions, setFormOptions] = useState({})

  console.log(formOptions)
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <div className="booking-section">
      <BookingForm
        updateFormOptions={setFormOptions}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
      {formOptions && formOptions.bookingDate}
      {/* <section className="register-section">
          <div className="register-heading">
            <h2>Sign in to collect Points</h2>
          </div>
          <div className="register-fields-group">
            <div className="register-fields">
              <label>First Name</label>
              <input></input>
            </div>
            <div className="register-fields">
              <label>Last Name</label>
              <input></input>
            </div>
          </div>
          <div className="register-fields-group">
            <div className="register-fields">
              <label>Phone Number</label>
              <input></input>
            </div>
            <div className="register-fields">
              <label>Email</label>
              <input></input>
            </div>
          </div>
          <div className="register-fields">
            <label>Password</label>
            <input></input>
          </div>
          <div className="register-fields">
            <label>Special Requests</label>
            <input></input>
          </div>
        </section>
        <section className="reservation-fields">
          <div>
            <h2>Booking Details</h2>
          </div>

          <div>
            <label>Date - Time - Number of diners</label>
            <input></input>
          </div>
          <div>
            <h3>Credit Card Details</h3>
          </div>
          <div>
            <label>Card Number</label>
            <input></input>
          </div>
          <div>
            <label>Full Name</label>
            <input></input>
          </div>
          <div>
            <label>Expiry Date</label>
            <input></input>
          </div>
          <div>
            <label>CVV</label>
            <input></input>
          </div>
          <div>
            <label>Send me a booking confirmation via text</label>
            <input></input>
          </div>
          <div>
            <label>Send me a booking confirmation via email</label>
            <input></input>
          </div>
          <button>Submit</button>
        </section> */}
    </div>
  )
}

export default BookingPage
