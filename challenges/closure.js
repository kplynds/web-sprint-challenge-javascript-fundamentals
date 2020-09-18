// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// nestedFunction can access internal because the scope of internal is the function myFunction. Because nestedFunction is nested inside of myFunction, in can reach inside to myFunction and use its variables. When Javascript reads console.log(internal), it first looks for internal inside of nestedFunction, and if it doesn't find it, it will then look for it inside of myFunction, where it is. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation (par) {
  let count = 0;
  let other = 0;
  for (let i=0; i < par; i++) {
    count = count + 1;
    other = other + count;
  }
return other;
}
console.log(summation(5));