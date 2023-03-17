import 'jest-matcher-one-of'
import { map } from './map'

const testMapping = map(0.5, 0, 1, 0, 100)

test(`Map number 0.5 from [0, 1] to [0, 100]: ${testMapping}`, () => {
  expect(testMapping).toEqual(50);
});
