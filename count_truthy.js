//create a function callled counttruthy
//which takes an array and returns the number of truthy elements.

const array = [1,2,3,null,4,'',NaN,6];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for (let value of array)
    if (value){
        count++;
    }
    return count;
}