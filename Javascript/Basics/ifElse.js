// This file begins at Waypoint 149.


var flip = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
// var flip = Math.floor(Math.random() * 2); also works
function flipFunction(){
  // Create an if-else statement here to return "heads" if flip is 0. Otherwise return "tails".
  // Only change code below this line.
  if (flip === 0) {
    return "heads";
  } else {
    return "tails";
  }
  // Only change code above this line.
}
console.log(flipFunction());
// We use this function to show you the value of your variable in your output box.
var result = flipFunction();if(typeof(flip) !== "undefined" && typeof(flip) === "number" && typeof(result) !== "undefined" && typeof(result) === "string"){(function(y,z){return 'flip = ' + y.toString() + ', text = ' + z;})(flip, result);}
// console.log(result); returns same result as console.log(flipFunction());
