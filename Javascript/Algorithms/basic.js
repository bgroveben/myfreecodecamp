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


// Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  str = str.toLowerCase();
  // Remove punctuation and spaces.
  var rmStr= str.replace(/[^A-Z0-9]/ig, '');
  // Reverse the string.
  var revStr = rmStr.replace(rmStr, rmStr.split('').reverse().join(''));
  // Return true or false if it's a palindrome.
  return revStr === rmStr;
}
// I tried chaining these methods together in fewer lines, but that was too confusing.
console.log(palindrome("RaceCAr"));
console.log(palindrome("Was it a car or a CAT I saw"));


// Return the length of the longest word in the provided sentence.
// Your response should be a number.
function findLongestWord(str) {
  var words = str.split(' ');
  var longest = 0;  // Set initial longest word length to zero.
  for (var w = 0; w < words.length; w++){  // Loop through each word in the string.
    if (longest < words[w].length) {  // If the next word is longer than the previous word,
      longest = words[w].length;      // set var longest to the next word.
    }
  }
  return longest;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("This is just another test."));


// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
function titleCase(str) {
  // Split string into an array.
  var words = str.split(" ");
  // Loop through each word in the array.
  for (var w = 0; w < words.length; w++) {
    // Capitalize the first letter of each word using charAt(),
    // use substring() to extract the remaining letters in each word and make them lower case,
    // then use the + operator to concatenate each string in the array.
    words[w] = words[w].charAt(0).toUpperCase() + words[w].substring(1).toLowerCase();
  }
  // Once each string in the array is capitalized, convert the array to a string.
  return words.join(" ");
}
console.log(titleCase("I'm a little tea pot", ""));
console.log(titleCase("sHoRt AnD sToUt", ""));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT", ""));


// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
function largestOfFour(arr) {
  var result = [];  // Initialize empty array for answer
    for (var a = 0; a < arr.length; a++) {  // Iterate through outer array
      var largestNum = 0;  //  Set initial maximum
      for (var b = 0; b < arr[a].length; b++) {  // Iterate through sub-arrays
        if (largestNum < arr[a][b]) {  // If the next number is greater than the previous number,
          largestNum = arr[a][b];  // set the next number to the new maximum
        }
      }
    result.push(largestNum);  // Add that number to the answer array and move to the next sub-array
  }
  return result;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], ""));
// For more elegant solutions, go to:
// https://stackoverflow.com/questions/31094820/search-an-array-consisting-of-sub-arrays-for-the-largest-number-and-return-in-a


// Check if a string (first argument) ends with the given target string (second argument).
/*function end(str, target) {
    return target === str.substr(str.length - target.length);
}
*/
function end(str, target) {
    return target.length > 0 && target === str.substr(str.length - target.length);
} /* Without the 'target.length > 0' part, an empty string as the 'target' argument would return true */
console.log(end("Hello World", "World", ""));
console.log(end("Bastian", "n", ""));


// Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
function repeat(str, num) {
  if (num < 1) {
    var result = str.repeat(0);
  } else {
    result = str.repeat(num);
  }
  return result
}
console.log(repeat("abc", 3, ""));
