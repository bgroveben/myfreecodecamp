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
