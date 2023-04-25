import { render, screen } from '@testing-library/react'
import BookingForm from './components/BookingForm'
import { initializeTimes, updateTimes } from './components/BookingPage'

test('Renders the BookingForm heading', () => {
  render(<BookingForm />)
  const headingElement = screen.getByText('Reservation Details')
  expect(headingElement).toBeInTheDocument()
})

describe('initializeTimes function', () => {
  test('should initialize the availableTimes state to an array of available times', () => {
    const initialState = initializeTimes()
    expect(initialState).toEqual([
      '12:00 PM',
      '12:30 PM',
      '1:00 PM',
      '1:30 PM',
      '6:00 PM',
      '6:30 PM',
      '7:00 PM',
      '7:30 PM',
    ])
  })
})

describe('updateTimes function', () => {
  test('should update the availableTimes state to an array of available times', () => {
    const initialState = [
      '12:00 PM',
      '12:30 PM',
      '1:00 PM',
      '1:30 PM',
      '6:00 PM',
      '6:30 PM',
      '7:00 PM',
      '7:30 PM',
    ]
    const selectedDate = new Date('01/01/2022')
    const expectedUpdatedTimes = [
      '1:00 PM',
      '1:30 PM',
      '6:00 PM',
      '6:30 PM',
      '7:00 PM',
      '7:30 PM',
    ]

    const updatedTimes = updateTimes(initialState, {
      type: 'UPDATE_TIMES',
      payload: selectedDate,
    })
    expect(updatedTimes).toEqual(expectedUpdatedTimes)
  })
})
