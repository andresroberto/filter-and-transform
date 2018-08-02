# filter-and-transform [![Build Status](https://travis-ci.org/andresroberto/filter-and-transform.svg?branch=master)](https://travis-ci.org/andresroberto/filter-and-transform)

This package exports a HoF that takes two parameters:

- **filterFn:** Predicate with filter criteria
- **transformFn:** Function with transformation logic

It returns a function that receives a single parameter:

- **collection:** The collection to reduce

and reduces it returning an array of values resulting of running thru the `transformFn` the elements that returned truthy for the `filterFn`.

## Example

```javascript
const filterAndTransform = require('filter-and-transform');

const isOdd = number => ((number % 2) === 1);

const addOne = number => number + 1;

const getOddNumbersAndAddOne = filterAndTransform(isOdd, addOne);

getOddNumbersAndAddOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [2, 4, 6, 8, 10]

```

## Requirements

Node >= v8.11.3
