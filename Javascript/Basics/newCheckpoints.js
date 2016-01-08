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


/*
Checkpoint: Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order.
New items can be added at the back of the queue and old items are taken off from the front of the queue.
Write a function queue which takes an "array" and an "item" as arguments.
Add the item onto the end of the array, then remove the first element of the array.
The queue function should return the element that was removed.
*/
// Setup
var myArr = [1,2,3,4,5];
function queue(arr, item) {
  arr.push(item);
  result = arr[0];
  arr.shift();
  return result;
}
// Display Code
console.log("Before: " + JSON.stringify(myArr));
console.log(queue(myArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(myArr));
console.log(queue([], 1));
console.log(queue([2], 1));
