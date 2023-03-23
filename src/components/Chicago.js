import './Chicago.css'
import restaurantImg from '../assets/restaurant.jpg'
import chef from '../assets/restaurant chef B.jpg'

function Chicago() {
  return (
    <section className="aboutus-section">
      <div className="aboutus-heading">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="aboutus-image">
        <div className="aboutus-image-top">
          <img alt="restaurant decking area" src={restaurantImg} />
        </div>
        <div className="aboutus-image-bottom">
          <img alt="chef cooking in restaurant" src={chef} />
        </div>
      </div>
    </section>
  )
}

export default Chicago
