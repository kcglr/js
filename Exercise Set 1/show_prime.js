showPrimes(20);
// prime -> factors are only 1 and itself
// composite -> numbers that have many factors compared to prime where it only has 2.


// outer loop is for iterating number from 2 to the limit.
function showPrimes(limit){
    for(let num = 2; num <= limit; num++){
        if (isPrime(num)){
            console.log(num);
        }
    }
}

// inner loop is for finding the factors of that number.
function isPrime(num){
    for(let factor = 2; factor < num; factor++){
        if(num % factor === 0){
            return false;
        }
    return true;
    }
}