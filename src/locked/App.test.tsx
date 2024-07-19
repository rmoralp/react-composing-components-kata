import { screen, render, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'
import { sleep } from '@/lib/sleep'

describe('Evaluate App components composition', () => {
  it('<App /> should have less or equal than 8 renders ', async () => {
    render(<App />)

    await screen.findByTestId('cc-price')

    const counters = screen.getAllByTestId('cc-count')

    const sum = counters.reduce((acc, counter) => {
      return acc + parseInt(counter.textContent!)
    }, 0)
    console.log('1',sum)
    expect(sum).toBeLessThanOrEqual(8)
  })

  it('<App /> should have less or equal than 23 renders after force renders count', async () => {
    render(<App />)

    await screen.findByTestId('cc-price')

    const button = screen.getByRole('button', { name: /Increment/i })

    fireEvent.click(button)

    await sleep(200)

    const counters = screen.getAllByTestId('cc-count')

    const sum = counters.reduce((acc, counter) => {
      return acc + parseInt(counter.textContent!)
    }, 0)
    console.log('2',sum)
    expect(sum).toBeLessThanOrEqual(23)
  })

  it('<App /> should have less or equal than 8 renders after selecting a different size', async () => {
    render(<App />)

    await screen.findByTestId('cc-price')

    fireEvent.change(screen.getByRole('select'), { target: { value: 2 } })

    await sleep(200)

    const counters = screen.getAllByTestId('cc-count')

    const sum = counters.reduce((acc, counter) => {
      return acc + parseInt(counter.textContent!)
    }, 0)

    expect(sum).toBeLessThanOrEqual(8)
  })
})
