import './BookingForm.css'

import chefs from '../assets/Mario and Adrian b.jpg'
import restaurant from '../assets/restaurant.jpg'
import { useState } from 'react'

function BookingForm() {
  const [formInputs, setFormInputs] = useState({})

  const handleInputChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setFormInputs({
      [name]: value,
    })
  }

  console.log(formInputs)

  return (
    <form>
      <section className="reservations-container">
        <div className="booking-heading">
          <h2>Reservation Details</h2>
        </div>
        <div className="reservation-section">
          <section className="reservation-fields">
            <div>
              <label htmlFor="booking-date" for="booking-date">
                Date
              </label>
              <input id="booking-date" name="booking-date" type="date"></input>
            </div>
            <div>
              <label htmlFor="booking-time" for="booking-time">
                Time
              </label>
              <select
                onChange={handleInputChange}
                id="booking-time"
                name="booking-time"
              >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
            </div>
            <div>
              <label htmlFor="diners" for="diners">
                Number of Diners
              </label>
              <input
                id="diners"
                name="diners"
                type="number"
                min={1}
                max={12}
              ></input>
            </div>
            <div>
              <label htmlFor="occasion" for="occasion">
                Occasion
              </label>
              <select id="occasion">
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
            <div>
              <h3>Seating Options</h3>
              <label htmlFor="standard" for="standard">
                Standard
              </label>
              <input
                type="radio"
                id="standard"
                name="seating_option"
                value="standard"
              ></input>
              <label htmlFor="outside" for="outside">
                Outside
              </label>
              <input
                type="radio"
                id="outside"
                name="seating_option"
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
