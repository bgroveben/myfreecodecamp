// New content that has been added for the new year. Some of this will probably be a little on the basic side.
// I have left out the console.log() statements for most of the results,
// so if you want to see some output, throw them in.

// Setup
var a;
var b = 2;
// Only change code below this line
var a = 7;
var b = a;

// Example
var ourVar = 19;
// Only change code below this line
var a = 9;

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";
// Do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

var myVar = 87;
// Only change code below this line
myVar++;

var myVar = 11;

// Only change code below this line
myVar--;

var quotient = 4.4 / 2.0;
var remainder = 11 % 3;

var a = 3;
var b = 17;
var c = 12;
// Only modify code below this line
a += 12;
b += 9;
c += 7;

var a = 11;
var b = 9;
var c = 3;
// Only modify code below this line
a -= 6;
b -= 15;
c -= 1;

var a = 5;
var b = 12;
var c = 4.6;
// Only modify code below this line
a *= 5;
b *= 3;
c *= 10;

var a = 48;
var b = 108;
var c = 33;
// Only modify code below this line
a /= 12;
b /= 4;
c /= 11;

// Checkpoint: Convert Celsius to Fahrenheit
function convert(celsius) {
  fahrenheit = (celsius * (9/5) + 32);
  if ( typeof fahrenheit !== 'undefined' ) {
  return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}
console.log(convert(0));
console.log(convert(100));
console.log(convert(30));
console.log(convert(-30));
