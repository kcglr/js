let x = 10;
let y = x;

x = 20;

//primitive type variables are independent.
// they are copied by their value.

let z = { value: 10 };
let v = z;

z.value = 20;

//reference type variables are dependent.
// they are copied by their reference.
