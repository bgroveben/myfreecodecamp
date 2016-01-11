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


// Waypoint: Accessing Objects Properties with the Dot Operator
// Instructions: Read the values of the properties hat and shirt of testObj using dot notation.
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


// Instructions: Read the values of the properties "an entree" and "the drink" of testObj using bracket notation.
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
console.log(entreeValue);
console.log();


// Instructions: Use the playerNumber variable to lookup player 16 in testObj using bracket notation.
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
