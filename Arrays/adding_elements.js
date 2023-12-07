const numbers = [1, 2];

//END
numbers.push(3, 4); // with this we can pass 1 or multiple argumetns to the end of an array.

//BEGINNING
numbers.unshift(0); // pushes existing elements to the right and adds the new values to the beginning.

//MIDDLE
numbers.splice(2, 0, "a", "b"); // we can go to a given position and add new elements or remove the existing ones.
//2 -> array icindeki baslangic noktasini sec
//0 -> kac tane element silmek istedigini sec
//"a","b" -> eklemek istedilerini gir

console.log(numbers);
