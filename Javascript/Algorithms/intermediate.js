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
