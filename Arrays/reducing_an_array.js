const numbers = [1, -1, 2, 3];

let sum = 0;
for (let i of numbers) {
  sum += i;
}

console.log(sum);

//easier way

//a(accumulator)= degeri depoladigimiz degisken, c(currentValue)= numbers arrayi, array icindeki degerler
// a = 0, c = 1  => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a =5
const sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// sondaki 0'i baslagic degeri olarak dusun.

// essentially with this reduced method we start with an accumulator then we loop through this array, and convert all of these elements into a single value which is accumulator in this case.

console.log(sum2);

// even shorter
// remove the initial value at the end (0) and with this the accumulator will be set to the first item in the array.
