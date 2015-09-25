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
