import './App.css'
import { Routes, Route } from 'react-router-dom'
import BookingPage from './components/BookingPage'
import BookingConfirmation from './components/BookingConfirmation'
import Homepage from './components/Homepage'

import Header from './components/Header'

import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
        <Route
          path="/reservation-confirmation"
          element={<BookingConfirmation />}
        ></Route>
        {/* <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
