//any variable that is put between () at the time of decleration of function is treated as a parameter. In this case its name.
function greet(name, lastName) { 
    console.log('Hello ' + name + ' ' + lastName);
}
// also the parameter that is between the () is only meaningful inside of that function. It will not be accessible outside of the function.

greet('Kadir','Caglar');
// what we put inside of the () after calling the fucntion at the end is called an argument.

//So a parameter is what we have in the beginning () of the function at the time of decleration, but the argument is the actual value we supply for that parameter.