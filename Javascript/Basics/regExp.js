// This file begins at Waypoint 150.


var forStrings = (function() {
  var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
  var expressionToGetSoftware = /software/gi;
  // Only change code below this line.
  // g is for global, i is for ignore case
  var expression = /and/gi;  // should return two instances of the word "and".
  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return forStrings;})();
console.log(forStrings);


var forNumbers = (function() {
  var testString = "There are 3 cats but 4 dogs.";
  // Only change code below this line.
  // \d is the digit selector, + allows for multi-digit numbers.
  var expression = /\d+/gi;  // should return 2, one instance of 3 and one instance of 4.
  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return forNumbers;})();
console.log(forNumbers);


var forSpaces = (function(){
  var testString = "How many spaces are there in this sentence?";
  // Only change code below this line.
  // \s to find spaces in a string, + for multiple spaces, g for global.
  var expression = /\s+/g;  // should return 7.
  // The Waypoint exercise included the i (ignore case) after the g -- I don't know why.
  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return forSpaces;})();
console.log(forSpaces);


// Invert Regular Expression Matches with JavaScript
// Use /\S/gi to match everything that isn't a space in the string.
// You can invert any match by using the uppercase version of the selector \s versus \S for example.
var forNonSpaces = (function(){
  var testString = "How many non-space characters are there in this sentence?";
  // Only change code below this line.
  var expression = /\S/gi;  // 49 characters that are not spaces.
  // Only change code above this line.
  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return forNonSpaces;})();
console.log(forNonSpaces);
