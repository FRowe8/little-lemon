import './App.css'
import { Routes, Route } from 'react-router-dom'
import BookingPage from './components/BookingPage'
import BookingConfirmation from './components/BookingConfirmation'
import Homepage from './components/Homepage'

import Header from './components/Header'

import Footer from './components/Footer'
import Chicago from './components/Chicago'
import Specials from './components/Specials'
import LoginForm from './components/LoginForm'

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
        <Route path="/about" element={<Chicago />}></Route>
        <Route path="/order_online" element={<Specials />}></Route>
        <Route path="/menu" element={<Specials />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
