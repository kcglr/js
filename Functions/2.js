// function declaration
walk();

function walk() {
  console.log("walk");
}

// funcion expression
let run = function () {
  console.log("run");
};

run();

// one main difference is that, in function declaration, you can call the function declaration syntax before the function itself. We cannot do this with function expression method.

// hoisiting: the process of moving function declarations to the top of the file.
