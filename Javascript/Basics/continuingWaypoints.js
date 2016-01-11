// Starting at around http://www.freecodecamp.com/challenges/waypoint-returning-boolean-values-from-functions

// Waypoint: Returning Boolean Values from Functions
// Instructions: Fix the function isLess to remove the if/else statements.
function isLess(a, b) {
  if(a < b) {
    return true;
  } else {
    return false;
  }
}
console.log(isLess(10, 15));

function booleanIsLess(a, b) {
  return a < b;
}
console.log(booleanIsLess(10, 15));
console.log();


// Waypoint: Return Early Pattern for Functions
/*
Instructions
Modify the function abTest so that if a or b are less than 0 the function will
immediately exit with a value of undefined.
*/
// Setup
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));
console.log(abTest(-2,2));
console.log(abTest(2,-2));
console.log();
