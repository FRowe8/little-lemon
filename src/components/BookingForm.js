import './BookingForm.css'

import chefs from '../assets/Mario and Adrian b.jpg'
import restaurant from '../assets/restaurant.jpg'
import { useState } from 'react'

function BookingForm({
  availableTimes,
  dispatch,
  updateFormOptions,
  submitForm,
}) {
  let defaultDate = new Date().toISOString().slice(0, 10)
  const [formInputs, setFormInputs] = useState({
    seatingOption: 'standard',
    occasion: 'None',
    bookingTime: availableTimes && availableTimes[0] ? availableTimes[0] : null,
  })

  const [formErrors, setFormErrors] = useState({
    bookingDate: false,
    bookingTime: false,
    diners: false,
    occasion: false,
    seatingOption: false,
  })

  const handleDateChange = (e) => {
    const selectedDate = e.target.value

    setFormInputs({
      ...formInputs,
      bookingDate: e.target.value,
    })

    // Dispatch action to update available times based on selected date
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate })
  }

  const handleInputChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setFormInputs({
      ...formInputs,
      [name]: value,
    })
    updateFormOptions({ ...formInputs })
    checkErrors()
  }

  const checkErrors = () => {
    setFormErrors({
      bookingDate: formInputs.bookingDate ? false : true,
      bookingTime: formInputs.bookingTime ? false : true,
      diners: formInputs.diners ? false : true,
      occasion: formInputs.occasion ? false : true,
      seatingOption: formInputs.seatingOption ? false : true,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formInputs.bookingDate && formInputs.occasion && formInputs.diners) {
      submitForm(formInputs)
    } else {
      checkErrors()
    }
  }

  return (
    <form id="reservation-details" aria-label="Reservation Details">
      <section className="reservations-container">
        <div className="booking-heading">
          <h2>Reservation Details</h2>
        </div>
        <div className="reservation-section">
          <section className="reservation-fields">
            <div>
              <label htmlFor="bookingDate">Date</label>
              <input
                min={defaultDate}
                onChange={handleDateChange}
                id="bookingDate"
                name="bookingDate"
                type="date"
              ></input>
              {formErrors.bookingDate && (
                <p className="error-text">Please Select a Date</p>
              )}
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
                    return <option key={time}>{time}</option>
                  })}
              </select>
              {formErrors.bookingTime && (
                <p className="error-text">Please Select a Time</p>
              )}
            </div>
            <div>
              <label htmlFor="diners">Number of Diners</label>
              <input
                onChange={handleInputChange}
                required={true}
                id="diners"
                name="diners"
                type="number"
                min={1}
                max={12}
              ></input>
              {formErrors.diners && (
                <p className="error-text">Please Select a number of Diners</p>
              )}
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select onChange={handleInputChange} id="occasion">
                <option key="none" value="none">
                  None
                </option>
                <option key="birthday" value="birthday">
                  Birthday
                </option>
                <option key="engagement" value="engagement">
                  Engagement
                </option>
                <option key="anniversary" value="anniversary">
                  Anniversary
                </option>
              </select>
              {formErrors.occasion && (
                <p className="error-text">Please Select an Occasion</p>
              )}
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
              {formErrors.seatingOption && (
                <p className="error-text">Please Select a Seating Option</p>
              )}
            </div>
            <div className="button-container">
              <button
                className="submit-button"
                type="submit"
                onClick={(e) => handleFormSubmit(e)}
              >
                Reserve Table
              </button>
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
