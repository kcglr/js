const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// old way to do it.

// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }
//same as = another["radius"] = circle["radius"];

//new way

//const another = Object.assign({ color: "yellow" }, circle);
//(target, source)

//simpliest way to clone an object

const another = { ...circle };
// spread operator (...) = takes all the properties and methods in the circle object and puts them in between the curly braces.

console.log(another);
