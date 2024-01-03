function sum(a, b) {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;

  //console.log(arguments);
  //return a + b; // 1 + undefined = NaN
}

console.log(sum(1, 2, 3, 5, 7, 10));

//  what if we want to add as many arguments as we want and get their sum?
// every function in js has a special object called argumetns. (its an object)
