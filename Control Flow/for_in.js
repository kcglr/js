const person = {
    name: 'kadir',
    age: 23
}

//we use for in loop to display all the properties of the objects.

for (let key in person){
    console.log(key, person[key]);
}

// in every iteration the key variable will hold one of the properties in this person object.
// we cant use dot notation because we dont have a property called key in person object. Thats when we use the bracket notation.

    //Dot notation
//person.name

    //Bracket notatin
//person['name']

const colors = ['red','green','blue'];
for (let index in colors){
    console.log(index, colors[index]);
}