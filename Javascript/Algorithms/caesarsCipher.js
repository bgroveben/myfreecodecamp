/*
In a Caesar's cipher, aka a shift cipher, the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places ('A' -> 'N', etc.).
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase.
Don't transform any non-alphabetic characters (spaces, punctuation, etc) but leave them as they are.
*/

/*
// Let's start with a string rotation function:
String.prototype.rotate = function(number) {
	var howFar = number % this.length; // How many spaces are we shifting?
	var plusOrMinus; // Is the shift positive or negative?
	if (howFar > 0) {
	  plusOrMinus = this.length - howFar;
	} else {
	  plusOrMinus = -howFar;
	}
	var firstSlice = this.substring(plusOrMinus, this.length); // from slice to end of string;
	var secondSlice = this.substring(0, plusOrMinus); // from beginning of slice to string;
	return firstSlice + secondSlice;
};
// Next, we need a function that will map the letters in the encoded alphabet to the letters in the decoded alphabet via an associative array.
function rot13_map(character) {
  // Now, we need an alphabet. The instructions state all capital letters, but I'm going to include lowercase letters as well.
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // We also need two arrays containing the corresponding letters in their respective positions:
  var firstArray = (alphabet + alphabet.toLowerCase()).split('');
  var secondArray = (alphabet.rotate(13) + alphabet.rotate(13).toLowerCase()).split;
  var rot13_dict = {};
  for (var i=0; i < firstArray.length; i++) {
    rot13_dict[firstArray[i]] = secondArray[i];
  }
  return rot13_dict[character] || character; // The instructions say to return the decoded character or pass on any non-letter character.
}
// Lastly, a function that turns the mapped arrays of letters into a string containing the decoded message:
function rot13(str) { // LBH QVQ VG!
  return str.split("").map(rot13_map).join("");
};
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("LBH QVQ VG!"));
*/

// The following code is the same as the above but without all of the comments I used to keep my mind straight. 
String.prototype.rotate = function(number) {
  var howFar = number % this.length;
  var plusOrMinus;
  if (howFar > 0) {
    plusOrMinus = this.length - howFar;
  } else {
    plusOrMinus = -howFar;
  }
  var firstSlice = this.substring(plusOrMinus, this.length);
  var secondSlice = this.substring(0, plusOrMinus);
  return firstSlice + secondSlice;
};
function rot13_map(character) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var firstArray = (alphabet + alphabet.toLowerCase()).split('');
  var secondArray = (alphabet.rotate(13) + alphabet.rotate(13).toLowerCase()).split('');
  var rot13_dict = {};
  for (var i = 0; i < firstArray.length; i++) {
    rot13_dict[firstArray[i]] = secondArray[i];
  }
  return rot13_dict[character] || character;
}
function rot13(str){
  return str.split("").map(rot13_map).join("");
};
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("LBH QVQ VG!"));
