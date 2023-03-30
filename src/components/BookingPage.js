import './BookingPage.css'

import chefs from '../assets/Mario and Adrian b.jpg'
import restaurant from '../assets/restaurant.jpg'

function BookingPage() {
  return (
    <div className="booking-section">
      <form>
        <section className="reservations-container">
          <div className="booking-heading">
            <h2>Reservation Details</h2>
          </div>
          <div className="reservation-section">
            <section className="reservation-fields">
              <div>
                <label for="booking_date">Date</label>
                <input
                  id="booking_date"
                  name="booking_date"
                  type="date"
                ></input>
              </div>
              <div>
                <label for="booking_time">Time</label>
                <input
                  id="booking_time"
                  name="booking_time"
                  type="time"
                ></input>
              </div>
              <div>
                <label for="diners">Number of Diners</label>
                <input
                  id="diners"
                  name="diners"
                  type="number"
                  min={1}
                  max={12}
                ></input>
              </div>
              <div>
                <label for="occasion">Occasion</label>
                <select id="occasion">
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>
              <div>
                <h3>Seating Options</h3>
                <label for="standard">Standard</label>
                <input
                  type="radio"
                  id="standard"
                  name="seating_option"
                  value="standard"
                ></input>
                <label for="outside">Outside</label>
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
        <section className="register-section">
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
        </section>
      </form>
    </div>
  )
}

export default BookingPage
