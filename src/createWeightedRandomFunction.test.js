import 'jest-matcher-one-of'
import { createWeightedRandomFunction } from './createWeightedRandomFunction'

// Create a function which will in 20% of time return white and in 80% of time black.
const items = [
  {
    weight: 20,
    value: 'white'
  },
  {
    weight: 80,
    value: 'black'
  }
]

const picker = createWeightedRandomFunction(items)
const color = picker()

test(`Pick randomly with bias between black (80%) and white (20%): ${color}`, () => {
  expect(color).toBeOneOf(['white', 'black']);
});
