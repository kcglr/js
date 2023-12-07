//Objects - reference types

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

//console.log(courses.includes({ id: 1, name: "a" }));

// this will return false because,
// there two different objects which is one that we pass to the console.log and the one in the courses constant.
// Both of these looks the same but stored at different locations in the computers memory.

// In order not to get a error we need to use the find methof with reference types:

//const course = courses.find(function (course) {
//  return course.name === "a";
//});

//idea here is that we create a function that iterates through the array, until the inputted value is returned.
//courses.findIndex is also another method which will return the objects location in the array rather than the whole thing.

//console.log(course);

// Arrow Functions (simpler way of doing the same thing we did on objects.)

const course = courses.find((course) => course.name === "a");
console.log(course);
