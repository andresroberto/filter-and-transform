/**
 * Returns a function that filters a collection
 * and transforms the filtered items.
 * @param {Function} filterFn Predicate with filter criteria
 * @param {Function} transformFn Function with transformation logic
 */
const filterAndTransform = (filterFn, transformFn) =>
  collection =>
    collection.reduce((acc, curr) => {
      if (filterFn(curr)) {
        return [...acc, transformFn(curr)];
      }
      return acc;
    }, []);

module.exports = filterAndTransform;
