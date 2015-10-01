// The map method is one of the easiest ways to iterate through an array or object.
// Use map to add three to each value in the array.
var array = [1,2,3,4,5];
console.log(array);
// Only change code below this line.
array = array.map(function(value) {
  return value + 3;
});
console.log(array);
// Only change code above this line.
(function() {return array;})();


// Reduce can be useful for condensing an array or numbers into one value.
var array = [4,5,6,7,8];
var singleVal = 0;
// This will add all of the numbers in array and return the sum.
var singleVal = array.reduce(function(previousValue, currentValue){
  return previousValue + currentValue;
});
console.log(singleVal);
// Only change code above this line.
(function() {return singleVal;})();


// Let's remove all the values greater than five.
var array = [1,2,3,4,5,6,7,8,9,10];
  // Only change code below this line.
array = array.filter(function(value){
  return value <= 5;
});
console.log(array);
  // Only change code above this line.
(function() {return array;})();


// Sort Arrays
var array = ['beta', 'alpha', 'charlie'];
// Only change code below this line.
array = array.sort();
console.log(array);
  // Only change code above this line.
(function() {return array;})();


// You can use the .reverse() function to reverse the contents of an array.
var array = [1,2,3,4,5,6,7];
  // Only change code below this line.
array.reverse();
console.log(array);
  // Only change code above this line.
(function() {return array;})();


// .concat() can be used to merge the contents of two arrays into one.
var array = [1,2,3];
var concatMe = [4,5,6];
// Only change code below this line.
array = array.concat(concatMe);
console.log(array);
// Only change code above this line.
(function() {return array;})();


// You can use the .split() method to split a string into an array.
var string = "Split me into an array";
// Only change code below this line.
var array = string;
array = string.split(' ');
console.log(array);
// Only change code above this line.
(function() {return array;})();


// We can use the .join() method to join each element in an array into a string separated by whatever delimiter you provide as an argument to the join operation.
var joinMe = ["Join","me","into","a","string"];
// Only change code below this line.
joinMe = joinMe.join(" ");
console.log(joinMe);
// Only change code above this line.
(function() {return joinMe;})();
