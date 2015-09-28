// Begins at Waypoint 141.

var a = 4;
var b = 5;
function ourFunction(a, b) {
  return a - b;
};
console.log(ourFunction(a, b));
// Create a function called myFunction that returns the value of a plus b.
// Only change code below this line.
function myFunction(a, b) {
  return a + b;
};
console.log(myFunction(a, b));
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myFunction) !== "undefined"){
var f=myFunction(a,b);
(function(){return f;})();
}


// Now for some Objects
// var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };
// Add the name (string), legs (number), tails (number) and friends (array) properties to myDog.
// You can set them to whatever you want.
// Only change code below this line.
var myDog = {
  "name": "Rover",
  "legs": 4,
  "tails": 2,
  "friends": ["Camper", "The Mailman"]
};
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
(function(z){return z;})(myDog);
console.log(myDog);


var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "arf!";
delete ourDog.tails;
console.log(ourDog);
var myDog = {
   "name": "Rover",
   "legs": 4,
   "tails": 1,
   "friends": ["Camper", "The Mailman"]
};
// Only change code below this line.
// Let's add the property bark to myDog
myDog.bark = "Woof!";
// Now delete the property tails
delete myDog.tails;
console.log(myDog);
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
(function(z){return z;})(myDog);


// Loops
ourArray = [];
for(var i = 0; i < 5; i++){
  ourArray.push(i);
}
console.log(ourArray);
// Only change code below this line.
// Push the numbers zero through four to myArray using a "for loop" like above.
var myArray = [];
for(var i = 0; i < 5; i++){
  myArray.push(i);
}
console.log(myArray);
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myArray) !== "undefined"){(function(){return myArray;})();}


var myArray = [];
// Only change code below this line.
var i = 0;
// Push the numbers zero through four to myArray using a "while loop".
while(i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myArray) !== "undefined"){(function(){return myArray;})();}


// Random numbers
function mathFunction() {
  // Change the 0 to Math.random().
  // Only change code below this line.
  return Math.random();
  // Only change code above this line.
}
console.log(mathFunction());
// We use this function to show you the value of your variable in your output box.
(function(){return mathFunction();})();


function randFunction(){
  // Make myFunction return a random number between zero and nine instead of a decimal.
  // Only change code below this line.
  return Math.floor(Math.random() * 10);
  // Only change code above this line.
}
console.log(randFunction());
// We use this function to show you the value of your variable in your output box.
(function(){return randFunction();})();


var min = 0;
var max = 9;
function newRandFunction() {
  // Make myFunction return a random number between zero and nine instead of a decimal
  // Only change code below this line.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(newRandFunction());
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
(function(){return newRandFunction();})();
