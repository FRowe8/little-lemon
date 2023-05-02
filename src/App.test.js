import { fireEvent, render, screen } from '@testing-library/react'
import BookingForm from './components/BookingForm'
import { initializeTimes, updateTimes } from './components/BookingPage'

import { fetchAPI } from './api'

test('Renders the BookingForm heading', () => {
  render(<BookingForm />)
  const headingElement = screen.getByText('Reservation Details')
  expect(headingElement).toBeInTheDocument()
})

describe('initializeTimes function', () => {
  test('should initialize the availableTimes state to an array of available times', () => {
    const initialState = fetchAPI(new Date())
    expect(initialState).toEqual(initialState)
  })
})

describe('updateTimes function', () => {
  test('should update the availableTimes state to an array of available times', () => {
    const initialState = fetchAPI(new Date())
    const selectedDate = new Date('01/01/2022')
    const expectedUpdatedTimes = fetchAPI(selectedDate)

    const updatedTimes = updateTimes(initialState, {
      type: 'UPDATE_TIMES',
      payload: selectedDate,
    })
    expect(updatedTimes).toEqual(expectedUpdatedTimes)
  })
})

describe('Reserve a table form', () => {
  test('Reservation is submitted if there are blank fields in the form', () => {
    const submitForm = jest.fn()
    const setFormOptions = jest.fn()
    render(
      <BookingForm updateFormOptions={setFormOptions} submitForm={submitForm} />
    )

    const dinersInput = screen.getByLabelText(/Number of Diners/)
    fireEvent.change(dinersInput, { target: { value: 4 } })

    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)

    expect(submitForm).toHaveBeenCalled()
  })

  test('Reservation is not submitted if there are blank fields in the form', () => {
    const submitForm = jest.fn()
    const setFormOptions = jest.fn()
    render(
      <BookingForm updateFormOptions={setFormOptions} submitForm={submitForm} />
    )

    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)

    expect(submitForm).not.toHaveBeenCalled()
  })
})
