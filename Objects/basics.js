// object orianted programming (oop)
// style of programming where we see a program as a collection of objects, that talk to eachother to perform some functionality.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {},
};

circle.draw(); // this is a method!

// if a FUNCTION is part of an OBJECT,
// we call it a METHOD!

// Factory Function

function createCircle(radius) {
  return {
    // by removing the circle constant and simply returning, so whenever we call the create circle function, we will get a circle object.
    radius: radius, // if u want to write this shorter just write radius, it is the equalivent of what we have right now.

    draw() {
      //whenever you want to create a function inside of an object you dont have to write the function keyword in the beginning.
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// Constructor Functions
//We use pascal notation, meaning every first letter of any word starts with uppercase. Unlike camel notation.

function Circle(radius) {
  this.radius = radius;
  // this keyword is a reference to the object that is executing this piece of code.
  // this references an empty object.
  // objects are dynamic meaning we can add additional properties or methods later on if we want to.
  this.draw = function () {
    console.log("draw");
  };
}

const Circle = new Circle(1);

// "new" operator creates an empty{} js object.
// it will set the "this" operator to the empty object created by "new".
// new operator will return the new object from the function.
