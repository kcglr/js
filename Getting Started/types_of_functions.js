// Performing a task

function greet(name, lastName) { 
    console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value
function square(number){
    return number * number; //square is number * number but we need to return that value to whoever is calling this function and exit from the function. Therefore we use return keyword.
}

console.log(square(31));
