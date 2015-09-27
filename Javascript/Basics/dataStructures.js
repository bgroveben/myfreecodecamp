function welcomeToBooleans() {
  return true;
}
console.log(welcomeToBooleans());


// var ourName = "Free Code Camp";
var myName = "bgroveben";
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myName) !== "undefined"){(function(v){return v;})(myName);}
console.log(myName);


// var name = "Alan Turing";
// var firstName = "Alan";
// var lastName = "Turing";
var myFirstName = "Benjamin";
var myLastName = "Grove";
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myFirstName) !== "undefined" && typeof(myLastName) !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}
console.log(myFirstName + ' ' + myLastName);


var firstNameLength = 0;
var lastNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
var lastName = "Lovelace";
// Only change code below this line.
lastNameLength = lastName.length;
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(lastNameLength) !== "undefined"){(function(){return lastNameLength;})();}
console.log(lastNameLength);


var firstLetterOfFirstName = "";
var firstLetterOfLastName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(v){return v;})(firstLetterOfLastName);
console.log(firstLetterOfLastName);


var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(v){return v;})(thirdLetterOfLastName);
console.log(thirdLetterOfLastName);


var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(v){return v;})(lastLetterOfLastName);
console.log(lastLetterOfLastName);


var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(v){return v;})(secondToLastLetterOfLastName);
console.log(secondToLastLetterOfLastName);


var sum = 10 + 10; //make this equal to 20 by changing the 0 into the appropriate number.
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(z){return 'sum='+z;})(sum);
console.log(sum);


var difference = 45 - 33; //make this equal to 12 by changing the 0 into the appropriate number.
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(z){return 'difference='+z;})(difference);
console.log(difference);


var product = 8 * 10; // Make this equal to 80 by changing the 0 into the appropriate number.
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(z){return 'product='+z;})(product);
console.log(product);


var quotient = 66 / 33; //make this equal to 2 by changing the 0 into the appropriate number.
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(z){return 'quotient='+z;})(quotient);
console.log(quotient);


// var ourDecimal = 5.7;
// Create a number with a decimal point here called myDecimal
var myDecimal = 3.14;
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(){if(typeof(myDecimal) !== "undefined"){return myDecimal;}})();
console.log(myDecimal);


var quotient = 4.4 / 2.0; // equals 2.2
var product = 2.0 * 2.5; // equals 5.0
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(y){return 'product='+y;})(product);
console.log(quotient);
console.log(product.toFixed(1));   // JS doesn't have floats and ints, only the Number data type.


// var array = ["John", 23];
// Only change code below this line.
var myArray = ["Ben", 26];
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(z){return z;})(myArray);
console.log(myArray);


var ourArray = [["the universe", "everything", 42]];
// Only change code below this line.
var myArray = [["pi", 3.14]];
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myArray) !== "undefined"){(function(){return myArray;})();}
console.log(myArray);


// var ourArray = [1,2,3];
// var ourData = ourArray[0]; // equals 1
var myArray = [1,2,3];
// Only change code below this line.
var myData = myArray[0];
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myArray) !== "undefined" && typeof(myData) !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
console.log(myData);


var ourArray = [1,2,3];
ourArray[1] = 3;
// ourArray[1] now equals [1,3,3].
var myArray = [1,2,3];
// Only change code below this line.

myArray[0] = 3;
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
if(typeof(myArray) !== "undefined"){(function(){return myArray;})();}
console.log(myArray);


// var numbers = [1,2,3];
// console.log(numbers); // logs [1,2,3]
// var removed = numbers.pop();
// console.log(numbers); // logs [1,2]
// console.log(removed); // logs 3
var myArray = ["John", 23, ["cat", 2]];
// Only change code below this line.
var removed = myArray.pop(); // This should be ["cat", 2] and myArray should now be ["John", 23]
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removed = ' + JSON.stringify(z);})(myArray, removed);
console.log(myArray);
console.log(removed);


var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.pop();
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", ["happy", "joy"]].
console.log(ourArray);
var myArray = ["John", 23, ["cat", 2]];
myArray.pop();
// Add a ["dog", 3] to the end of myArray using push().
// Only change code below this line.
console.log(myArray);
myArray.push(["dog", 3]);
console.log(myArray);
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);


var ourArray = ["Stimpson", "J", ["cat"]];
ourRemoved = ourArray.shift();
// ourArray now equals ["J", ["cat"]].
console.log(ourRemoved);
var myArray = ["John", 23, ["dog", 3]];
// Only change code below this line.
console.log(myArray);
var myRemoved = myArray.shift(); // This should be ["John"] and myArray should now be [23, ["dog", 3]].
console.log(myRemoved);
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & myRemoved = ' + JSON.stringify(z);})(myArray, myRemoved);


var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.shift();
// ourArray now equals ["happy", "J", ["cat"]]
ourArray.unshift("happy");
console.log(ourArray);
var myArray = ["John", 23, ["dog", 3]];
myArray.shift();
console.log(myArray);
// Add "Paul" to the start of myArray.
// Only change code below this line.
myArray.unshift("Paul");
console.log(myArray);
// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
// You'll learn about functions soon.
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
