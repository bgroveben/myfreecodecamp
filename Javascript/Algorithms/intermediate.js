// Bonfire: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.
function sumAll(arr) {
  if (!arr) {  // Return a number even if the sumAll() function has no arguments or has a 'falsy' value.
    return 1;
  } else {
    var arrSorted = arr.sort(function(i, j) {  // Sort the argument input array so lower number comes first.
      return (i - j);
    })
    function range(arrSorted) {  // Range function using sorted array
      var a=[arrSorted[0]];  // Initialize array at starting number
      var b=arrSorted[0];  // Start incrementing from starting number
      while(b<arrSorted[1]){  // Stop incrementing at the last number in the array
        b+=1;  // Increment by one whole number
        a.push(b)  // Add incremented numbers to result array
      }
      return a;
    }
    return(range(arr)).reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;  // Add all numbers in the array
    });
  }
}
console.log(sumAll());
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));


// Bonfire: Diff Two Arrays
// Compare two arrays and return a new array with any items not found in both of the original arrays.
function diff(arr1, arr2) {
  var newArr = [];  // Initialize an empty array for the soution.
  var combined = arr1.concat(arr2);  // Concatenate the two argument arrays.
  for (var a = 0; a < combined.length; a++) {  // Set first variable to loop through all elements in the combined array.
    var count = 0;  // Initialize a counter to keep track of the number of times an element is encountered.
    for (var b = 0; b < combined.length; b++) { // Set second variable to loop through the combined array.
      if (combined[a] === combined[b]) {  // If a === b,
        count++;  // then the element is a duplicate and will be recorded in the count.
      }
    }
    if (count < 2) {  // If the element is unique, that means it wasn't in both of the arrays before they were combined,
      newArr.push(combined[a]);  // and it will be stored in the new array.
    }
  }
  return newArr;
}
// This solution also works, but I found it on Stack Overflow so it doesn't count
/* function diff(arr1, arr2) {
  for (var i in arr1) {
    for (var j in arr2) {
      if (arr1[i] === arr2[j]){
        arr2.splice(j,1);
      }
    }
  }
  return arr2;
}*/
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diff([], ["snuffleupagus", "cookie monster", "elmo"]));
