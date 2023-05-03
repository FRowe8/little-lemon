import './BookingPage.css'

import BookingForm from './BookingForm'
import { useState, useReducer } from 'react'
import { fetchAPI, submitAPI } from '../api'
import { useNavigate } from 'react-router-dom'

export const initializeTimes = () => {
  let defaultDate = new Date()

  return fetchAPI(defaultDate)
}

export const updateTimes = (state, action) => {
  //changes availableTimes
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = action.payload
      const newAvailableTimes = getAvailableTimesForDate(selectedDate)
      return newAvailableTimes
    default:
      return state
  }
}

function getAvailableTimesForDate(date) {
  return fetchAPI(new Date(date))
}

function BookingPage() {
  const [formOptions, setFormOptions] = useState({})
  const navigate = useNavigate()

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  function submitForm(formData) {
    const successfullySubmitted = submitAPI(formData)
    if (successfullySubmitted) {
      navigate('/reservation-confirmation', { state: { ...formData } })
    }
  }

  return (
    <div className="booking-section">
      <BookingForm
        updateFormOptions={setFormOptions}
        availableTimes={availableTimes}
        submitForm={submitForm}
        dispatch={dispatch}
      />
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
