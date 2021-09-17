// const sum = require('./sum');
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 0 to equals 1', () => {
  expect(sum(1, 0)).toBe(1);
});
test('adds 12 - 0 to equals 12', () => {
  expect(sum(12, -0)).toBe(12);
});

describe('Name of the group', () => {
  test('should ', () => {});
});
