// return the sum of all the multiples of 3 and 5 from 0 up to the requested limit

console.log(sum(20));

function sum(limit){
    let sum = 0
    for (let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}