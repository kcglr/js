const numbers = [1, -1, 2, 3, 4];

const filtered = numbers.filter(function (i) {
  return i >= 0;
});

// with mapping we can map each item in an array to something else.

const items = filtered.map((i) => "<li>" + i + "</li>");
const html = "<ul>" + items.join("") + "</ul>"; //with .join method we can join the elements of this array and create a string.
console.log(html);

//we can also map the items inside of an array to objects.

const items_obj = filtered.map((i) => {
  return { value: i };
});

console.log(items_obj);

// with this we have mapped each number to an object with a value property.

// if we have a single line of code and returning an value
// we can exclude the return keyword as well as the curly braces.

// when working with objects add brackets next to curly braces because
// js thinks we are defining a codeblock as opposed to an object to return.
const items_obj2 = filtered.map((i) => ({ value: i }));

//we can also use a chaining method to make our code look better and function better
// for example

const items_v3 = numbers
  .filter((i) => i >= 0) // same function as line 3, different way of writing it
  .map((i) => ({ value: i }))
  .filter((obj) => obj.value > 1) //FILTERS THE VALUES THAT ARE GREATER THAN 1
  .map((obj) => obj.value); // MAPS EACH OBJECT TO A NUMBER

console.log(items_v3);
