const numbers = [5, 2, 4];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// working with objects

const courses = [
  { id: 1, name: "Kadir" },
  { id: 2, name: "can" },
];

courses.sort();
console.log(courses);
// nothing happens

//how to make it work
//we basically behave them as numbers, how?
// ascii table, in ascii all letters have a order and a value assigned to them,
// therefore, we can use the function underneath to help us sort the object array.
courses.sort(function (a, b) {
  // a < b => -1
  // a> b => 1
  // a = b => 0
  const nameA = a.name.toUpperCase(); //we convert all items in the array to uppercase or lowercase to compare them fairly. Becasue in the ascii table the lower case and uppercase letters have different values.
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});
