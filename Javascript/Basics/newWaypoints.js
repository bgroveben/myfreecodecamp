// Waypoints starting at about #24 (they have a tendency to change over time)

var myStr = "I am a \"double quoted\" string inside \"double quotes\""; // Change this line
console.log(myStr);

var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Encode the following sequence, separated by spaces:
// backslash tab tab carriage-return new-line and assign it to myStr
var myStr = "\\ \t \t \r \n"; // Change this line

// Example
var ourStr = "I come first. " + "I come second.";
// Only change code below this line
var myStr = "This is the start. " + "This is the end.";

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";
// Only change code below this line
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Example
var ourName = "Free Code Camp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// Only change code below this line
var myName = "myName";
var myStr = "My name is " + myName + "And I am swell!";

// Example
var anAdjective = "awesome!";
var ourStr = "Free Code Camp is ";
ourStr += anAdjective;
// Only change code below this line
var someAdjective = "fun!";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Setup
var myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Fix Me

// Read from myArray using bracket notation so that myData is equal to 8
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// Only change code below this line.
var myData = myArray[2][1];

// Example
function ourFunction(a, b) {
  console.log(a - b);
}
ourFunction(10, 5); // Outputs 5
// Only change code below this line.
// Create a function called myFunction that accepts two argguments and outputs their sum to the dev console.
function myFunction(first, second) {
  console.log(first + second);
}
myFunction('my', 'Function');


/*Instructions
Declare a global variable myGlobal outside of any function.
Initialize it to have a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var keyword.
*/
// Declare your variable here
var myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
console.log(fun1());
console.log(fun2());
