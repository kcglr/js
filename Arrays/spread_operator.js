const first = [1, 2, 3];
const second = [4, 5, 6];

//concat method
//const combined = first.concat(second);

// Other way that much more flexible than .concat method
const combined = [...first, ...second];
//the code above exactly mean -> [1,2,3,4,5,6]
console.log(combined);
// we can also add additional elements in between
const combined2 = [...first, "a", ...second];
console.log(combined2);

const copy = combined.slice();
console.log(copy);
// if we call slice method without any arguments,
// it returns the copy of the original array.

//better way to do it:
const copy2 = [...combined];
console.log(copy2);
