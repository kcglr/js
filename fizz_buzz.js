// if the number is divisible by 3 return fizz
// if the number is divisible by 5 return buzz
// if the number is divisible by 3 and 5 return fizzbuzz
// if not divisible by either 3 or 5 return the number
// if we pass a string return the text 'not a number'

const output = fizzBuzz(true);
console.log(output)

function fizzBuzz(input){
    if (typeof input !== 'number')
        return NaN; //NaN = not a number

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';
    
    if (input % 5 === 0)
        return 'Buzz';
    
    return input;

}