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
