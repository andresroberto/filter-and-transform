const filterAndTransform = require('./index');

test('should rerturn a function that filters by given criteria and transforms using given logic', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const isOdd = number =>
    ((number % 2) === 1);
  
  const addOne = number =>
    (number + 1);

  const getOddNumbersAndAddOne = filterAndTransform(
    isOdd,
    addOne,
  );

  const result = getOddNumbersAndAddOne(numbers);

  expect(result).toEqual([2, 4, 6, 8, 10]);
});
