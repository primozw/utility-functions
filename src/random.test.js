import 'jest-matcher-one-of'
import { random, randomElement } from './random'

test(`Selecting random number in range -1 and 1: ${random()}`, () => {
  expect(random()).toBeLessThanOrEqual(1);
  expect(random()).toBeGreaterThanOrEqual(-1);
});

test(`Selecting random number in range 0 and 100: ${random(0, 100)}`, () => {
  expect(random(0, 100)).toBeLessThanOrEqual(100);
  expect(random(0, 100)).toBeGreaterThanOrEqual(0);
});

test(`Selecting random integer number in range 0 and 100: ${random(0, 100, 1)}`, () => {
  expect(random(0, 100, 1)).toBeLessThanOrEqual(100);
  expect(random(0, 10, 1)).toBeGreaterThanOrEqual(0);
  expect(random(0, 10, 1) % 1).toEqual(0);
});

test(`Selecting random integer number in range 0 and 1000, with step 50: ${random(0, 1000, 50)}`, () => {
  expect(random(0, 1000, 50)).toBeLessThanOrEqual(1000);
  expect(random(0, 1000, 50)).toBeGreaterThanOrEqual(0);
  expect(random(0, 1000, 50) % 50).toEqual(0);
});



test(`Throw an error if array or object is not given`, () => {
  expect(() => randomElement(1)).toThrow();
});

const items = ['red', 'green', 'blue']

test(`Selecting random item from the array: ${items}. Selected value: ${randomElement(items)}`, () => {
  expect(randomElement(items)).toBeOneOf(items);
});

test(`Throw an error if array is empty`, () => {
  expect(() => randomElement([])).toThrow('Provided array must contain at least one element');
});


const obj = {
  prop1: 1,
  prop2: 2
}

test(`Selecting random prop key from the object: ${obj}. Selected value: ${randomElement(obj)}`, () => {
  expect(randomElement(obj)).toBeOneOf(['prop1', 'prop2']);
});

test(`Throw an error if object is empty`, () => {
  expect(() => randomElement({})).toThrow('Provided object must contain at least one property');
});







