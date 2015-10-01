// Bonfire time!
// Your goal is to fix the failing test.
function meetBonfire(argument) {
  // Good luck!
  console.log("You can read this function's argument in the developer tools. ", argument);
  return true;  // I changed 'false' to 'true'; this one was a gimme.
}
meetBonfire("You can do this!");


// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
function reverseString(str) {
  // ary = str.split('');
  // backwards = ary.reverse();
  // result = backwards.join('');
  // return result;
  return str.split('').reverse().join('');
}
console.log(reverseString("hello", ""));
console.log(reverseString("Greetings from Earth", ""));


// Return the factorial of the provided integer.
// Using recursion:
function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
}
console.log(factorialize(5, ''));
// Using iteration (a while loop):
function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    var tmp = num;
    while (num-- > 2){
      tmp *= num;
    }
  return tmp;
  }
}
console.log(factorialize(5, ''));
