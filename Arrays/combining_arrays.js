//combine
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

//slice
const slice = combined.slice(2, 4);
//2 den 4'e kadar olan rakamlar yazdirilacak (ilk yazilan yani 2 print edilmez son yazilan yani 4 edilir.)
console.log(slice);

// if we have objects values they are copied by their reference.
// Meaning that, both input and output arrays will point to the same object.
