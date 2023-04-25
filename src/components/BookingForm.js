import './BookingForm.css'

import chefs from '../assets/Mario and Adrian b.jpg'
import restaurant from '../assets/restaurant.jpg'
import { useState } from 'react'

function BookingForm({ availableTimes, dispatch, updateFormOptions }) {
  const [formInputs, setFormInputs] = useState({
    seatingOption: 'standard',
    occasion: 'Birthday',
  })

  const handleDateChange = (e) => {
    const selectedDate = e.target.value

    // Dispatch action to update available times based on selected date
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate })
  }

  let defaultDate = new Date().toISOString().slice(0, 10)

  const handleInputChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setFormInputs({
      ...formInputs,
      [name]: value,
    })

    updateFormOptions({ ...formInputs })
  }

  return (
    <form>
      <section className="reservations-container">
        <div className="booking-heading">
          <h2>Reservation Details</h2>
        </div>
        <div className="reservation-section">
          <section className="reservation-fields">
            <div>
              <label htmlFor="bookingDate">Date</label>
              <input
                value={defaultDate}
                min={defaultDate}
                onChange={handleDateChange}
                id="bookingDate"
                name="bookingDate"
                type="date"
              ></input>
            </div>
            <div>
              <label htmlFor="bookingTime">Time</label>
              <select
                onChange={handleInputChange}
                id="bookingTime"
                name="bookingTime"
              >
                {availableTimes &&
                  availableTimes.map((time) => {
                    return <option>{time}</option>
                  })}
              </select>
            </div>
            <div>
              <label htmlFor="diners">Number of Diners</label>
              <input
                onChange={handleInputChange}
                id="diners"
                name="diners"
                type="number"
                min={1}
                max={12}
              ></input>
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select onChange={handleInputChange} id="occasion">
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
            <div>
              <h3>Seating Options</h3>
              <label htmlFor="standard">Standard</label>
              <input
                onChange={handleInputChange}
                type="radio"
                checked={formInputs.seatingOption === 'standard'}
                id="standard"
                name="seatingOption"
                value="standard"
              ></input>
              <label htmlFor="outside">Outside</label>
              <input
                onChange={handleInputChange}
                type="radio"
                checked={formInputs.seatingOption === 'outside'}
                id="outside"
                name="seatingOption"
                value="outside"
              ></input>
            </div>
          </section>
          <aside>
            <div className="reservation-images">
              <img alt="Two chefs posing at the pizza oven" src={chefs} />
            </div>
            <div className="reservation-images">
              <img alt="outside seating of restaurant" src={restaurant} />
            </div>
          </aside>
        </div>
      </section>
    </form>
  )
}

export default BookingForm
