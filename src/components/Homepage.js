import CallToAction from './CallToAction'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'
import Main from './Main'

function HomePage() {
  return (
    <Main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </Main>
  )
}

export default HomePage
