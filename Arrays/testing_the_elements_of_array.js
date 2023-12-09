const numbers = [1, 2, 3];

const all_positive = numbers.every(function (value) {
  return value >= 0;
});

console.log(all_positive);
// .every method
// whenever there is a item that is against to the condition we set the iteration stops and returns false if not true.
// in this case, whenever there is a "-" value on the array the the iteration stops and function returns false.

const some_positive = numbers.some(function (value) {
  return value >= 0;
});

console.log(some_positive);

// .some method
// in this method, function iterates over the array and when it meets the criteria that we set, it stops the iteration and returns true.
