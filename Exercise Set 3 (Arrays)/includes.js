const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElement) {
  for (let i of array) {
    if (i == searchElement) {
      return true;
    } else {
      return false;
    }
  }
}
