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
console.log();


/*
Waypoint: Selecting from many options with Switch Statements
If you have many options to choose from, use a switch statement.
A switch statement tests a value and can have many case statements which defines various possible values.
Statements are executed from the first matched case value until a break is encountered.
*/
// Instructions: Write a switch statement which tests val and sets answer for the following conditions:
function switchTest(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(switchTest(1));
console.log(switchTest(2));
console.log(switchTest(3));
console.log(switchTest(4));
console.log();


/*
Waypoint: Adding a default option in Switch statements
Instructions
Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"
*/
function defaultOption(value) {
  answer = "";
  switch (value) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
  }
  return answer;
}
console.log(defaultOption(1));
console.log(defaultOption("a"));
console.log();


/*
Waypoint: Multiple Identical Options in Switch Statements
If the break statement is ommitted from a switch statement's case, the following case statement(s) are executed
until a break is encountered.
If you have multiple inputs with the same output, you can represent them in a switch statement.
Instructions
Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"
Note
You will need to have a case statement for each number in the range.
*/
function multipleOptions(value) {
  var answer = "";
  // Only change code below this line
  switch (value) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
console.log(multipleOptions(2));
console.log(multipleOptions(5));
console.log(multipleOptions(8));
console.log();


/*
Waypoint: Replacing If Else Chains with Switch
Instructions: Change the chained if/if else statements into a switch statement.
*/
function anIfElse(val) {
  var answer = "";
  if(val === "bob") {
    answer = "Marley";
  } else if(val === 42) {
    answer = "The Answer";
  } else if(val === 1) {
    answer = "There is no #1";
  } else if(val === 99) {
    answer = "Missed me by this much!";
  } else if(val === 7) {
    answer = "Ate Nine";
  }
  return answer;
}
console.log(anIfElse(7));

function aSwitchStatement(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
console.log(aSwitchStatement(7));
