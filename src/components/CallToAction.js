import './CallToAction.css'
import food from '../assets/restauranfood.jpg'

function CallToAction() {
  return (
    <section className="callToAction-section">
      <div className="callToAction-heading">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Reserve a Table</button>
      </div>
      <div className="callToAction-image">
        <img alt="Little Lemon food platter " src={food} />
      </div>
    </section>
  )
}

export default CallToAction
