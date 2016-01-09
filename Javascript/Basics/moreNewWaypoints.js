// This file begins with Waypoint: Comparisons with the Logical And Operator.

/*
Combine the two if statements into one statement which will return "Yes" if val is less than
or equal to 50 and greater than or equal to 25.
Otherwise, the statement will return "No".
*/
function nestedIf(val) {
  if (val <= 50) {
    if (val >= 25) {
      return "Yes";
    }
  }
  return "No";
}
console.log(nestedIf(30));
console.log(nestedIf(55));
console.log(nestedIf(15));

function logicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
console.log(logicalAnd(30));
console.log(logicalAnd(55));
console.log(logicalAnd(15));
