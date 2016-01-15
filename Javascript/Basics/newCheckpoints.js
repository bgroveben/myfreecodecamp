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
console.log();


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
console.log();

/*
Checkpoint: Golf Code
In the game of golf each hole has a par for the average number of strokes needed to sink the ball. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed a par and strokes. Return strings according to this table (based on order of priority - top (highest) to bottom (lowest)):
par and strokes will always be numeric and positive.
*/
function golfScore(par, strokes) {
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= (par - 2)) {
    return "Eagle";
  } else if (strokes == (par - 1)) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == (par + 1)) {
    return "Bogey";
  } else if (strokes == (par + 2)) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}
console.log(golfScore(5, 4));
console.log(golfScore(4, 2));
console.log(golfScore(4, 1));
console.log();

/*
Checkpoint: Counting Cards
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck.
This is called Card Counting.
Having more high cards remaining in the deck favors the player.
Each card is assigned a value acountingCardsording to the table below.
When the count is positive, the player should bet high.
When the count is zero or negative, the player should bet low.
Value	Cards
+1 --	2, 3, 4, 5, 6
0	-- 7, 8, 9
-1	-- 10, 'J', 'Q', 'K','A'
You will write a card counting function.
It will receive a card parameter and increment or decrement the global count variable according to the card's value.
The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
Example Output:
-3 Hold
5 Bet
*/
var count = 0;
function countingCards(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      // I used count += 0; on the FcountingCards site because the linter threw a warning -- the results are the same.
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
console.log(countingCards(2));
console.log(countingCards(3));
console.log(countingCards(7));
console.log(countingCards('K'));
console.log(countingCards('A'));
console.log(countingCards('Q'));
console.log(countingCards(2), countingCards(3), countingCards(7), countingCards('K'), countingCards('A'), countingCards('Q'));
console.log();


// Checkpoint: Record Collection
/*
You are given a JSON object representing (a small part of) your record collection.
Each album is identified by a unique id number and has several properties.
Not all albums have complete information.
Write a function which takes an id, a property (prop), and a value.
For the given id in collection:
If value is non-blank(value !== "") and prop is not "tracks" then update or set the value for the prop.
If the prop is "tracks" and value is non-blank, push the value onto the end of the tracks array.
If value is blank, delete that prop.
Always return the entire collection object.
*/
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};
// Keep a copy of the collection for tests:
var collectionCopy = JSON.parse(JSON.stringify(collection));
function update(id, prop, value) {
  if (prop == "tracks" && value !== "") {
    collection[id][prop].push(value);
  } else if (value !== "") {
    collection[id][prop] = value;
  } else if (value === "") {
    delete collection[id][prop];
  }
return collection;
}
console.log(update(5439, "artist", "ABBA"));
console.log();
console.log(update(2548, "artist", ""));
console.log();
console.log(update(1245, "tracks", "Addicted to Love"));
console.log();
console.log(update(5439, "tracks", ""));
console.log();
console.log();


/*
Checkpoint: Profile Lookup
We have an array of objects representing different people in our contacts lists.
A lookUp function that takes firstName and a property (prop) as arguments has been pre-written for you.
The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If firstName does not correspond to any contacts then return "No such contact"
If prop does not correspond to any valid properties then return "No such property"
*/
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intruiging Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
];
function lookUp(firstName, prop){
  for (i = 0; i < contacts.length; i++) {
    if (firstName === contacts[i].firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
      return "No such property";
      }
    }
  }
  return "No such contact";
}
console.log(lookUp("Akira", "likes"));
console.log(lookUp("Kristian", "lastName"));
console.log();
