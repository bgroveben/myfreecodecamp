/*
Checkpoint: Word Blanks
We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks".
You will create an (optionally humorous) "Fill in the Blanks" style sentence.
You will need to use string operators to build a new string, result, using the provided variables:
myNoun, myAdjective, myVerb, and myAdverb.
*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    /* The following code passes the tests, but isn't what the authors really intended (I think):
    result += myNoun + ", " + myAdjective + ", " + myVerb + ", " + myAdverb;
    */
    // This is more along the lines of what they want:
    result = "The " + myAdjective + " " + myNoun + " " + myAdverb + " " + myVerb + ".";
    // Your code above this line
  return result;
}
// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));


/*
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list
*/
var myList = [["level1", 1], ["level2", 2], ["level3", 3], ["level4", 4], ["level5", 5]];
