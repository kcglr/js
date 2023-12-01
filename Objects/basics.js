// object orianted programming (oop)
// style of programming where we see a program as a collection of objects, that talk to eachother to perform some functionality.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw(); // this is a method!

// if a FUNCTION is part of an OBJECT,
// we call it a METHOD!
