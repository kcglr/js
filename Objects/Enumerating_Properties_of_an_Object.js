const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//for in
for (let key in circle) {
  // with this we can iterate over all the properties of an object.
  console.log(key, circle[key]);
  // if we want to get a value of the property we use the bracket notation.
}

//for of
for (let key of circle) {
  console.log(key);
}
// this will generate an error because, for of loops are only used with iterables such as arrays and maps.

//However
for (let key of Object.keys(circle)) {
  console.log(key);
}
//Object.keys with this method we can get all the properties in the object.

for (let entry of Object.entries(circle)) {
  console.log(entry);
}
//Object.entries is another method that allows us to get all the properties in the object.

if ("radius" in circle) {
  console.log("yes");
}
// to see if a given property or method exist in an object, we use in operator.
