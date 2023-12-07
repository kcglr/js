let numbers = [1, 2, 3, 4];
let another = numbers;

// solution 1, only works if we dont have other variables assigned as the array we want to empty
//numbers = [];

// solution 2 (best)
numbers.length = 0;

//solution 3
numbers.splice(0, numbers.length);

//solution 4 (not really recommended with big data sets)
while (numbers.length > 0) {
  numbers.pop();
}
