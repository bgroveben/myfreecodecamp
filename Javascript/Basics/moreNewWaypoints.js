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
console.log();

// Combine the two if statements into one statement which returns "Outside" if val is not
// between 10 an 20, inclusive.
// Otherwise, return "Inside".
function twoIfs(val) {
  if (val < 10) {
    return "Outside";
  }
  if (val > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(twoIfs(15));
console.log(twoIfs(9));
console.log(twoIfs(21));

function logicalOr (val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(logicalOr(15));
console.log(logicalOr(9));
console.log(logicalOr(21));
console.log();


// Time for if/else statements. Combine the if statements into a single statement:
function nextTwoIfs(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }
  if (val <= 5) {
    result = "5 or Smaller";
  }
  return result;
}
console.log(nextTwoIfs(4));
console.log(nextTwoIfs(6));

function ifElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
console.log(ifElse(4));
console.log(ifElse(6));
console.log();

// Now, introducing Else If statements:
function noElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  if (val < 5) {
    return "Smaller than 5";
  }
  return "Between 5 and 10";
}
console.log(noElseIf(7));
console.log(noElseIf(4));
console.log(noElseIf(11));

function hasElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(hasElseIf(7));
console.log(hasElseIf(4));
console.log(hasElseIf(11));
console.log();

// On to some chained if/else statements:
function chainedIfElse(number) {
  if (number < 5) {
    return "Tiny";
  } else if (number < 10) {
    return "Small";
  } else if (number < 15) {
    return "Medium";
  } else if (number < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(chainedIfElse(4));
console.log(chainedIfElse(14));
console.log(chainedIfElse(24));
