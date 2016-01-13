// Starting at around http://www.freecodecamp.com/challenges/waypoint-returning-boolean-values-from-functions

// Waypoint: Returning Boolean Values from Functions
// Instructions: Fix the function isLess to remove the if/else statements.
function isLess(a, b) {
  if(a < b) {
    return true;
  } else {
    return false;
  }
}
console.log(isLess(10, 15));

function booleanIsLess(a, b) {
  return a < b;
}
console.log(booleanIsLess(10, 15));
console.log();


// Waypoint: Return Early Pattern for Functions
/*
Instructions
Modify the function abTest so that if a or b are less than 0 the function will
immediately exit with a value of undefined.
*/
// Setup
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));
console.log(abTest(-2,2));
console.log(abTest(2,-2));
console.log();


// Waypoint: Accessing Objects Properties with the Dot Operator
// Instructions: Read the values of the properties hat and shirt of testObj using dot notation.
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


// Instructions: Read the values of the properties "an entree" and "the drink" of testObj using bracket notation.
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
console.log(entreeValue);
console.log();


// Instructions: Use the playerNumber variable to lookup player 16 in testObj using bracket notation.
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];


/*
Instructions: Add a "bark" property to myDog and set it to a dog sound, such as "woof".
You may use either dot or bracket notation.
*/
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "bow-wow";
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};
myDog["bark"] = "Hell Yeah!";
// Now delete the "tails" property from myDog using either dot or bracket notation.
// FCC's linter favors dot notation for individual words like "tails".
delete myDog.tails;
console.log(ourDog);
console.log(myDog);
console.log();


/*
Instructions: Convert the switch statement into a lookup table called lookup.
Use it to look up val and return the associated string:
*/
function switchPhoneticLookup(val) {
  var result = "";
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  return result;
}
console.log(switchPhoneticLookup("charlie"));
// This is an example of part of a reverse alphabet lookup:
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
// ...
  24:"C",
  25:"B",
  26:"A"
};
console.log(alpha[2]);
console.log(alpha[24]);
var value = 2;
console.log(alpha[value]);
console.log();
// Now it's conversion time:
function tablePhoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}
console.log(tablePhoneticLookup("charlie"));
console.log(tablePhoneticLookup("echo"));
console.log();


/*
Instructions
Modify the function checkObj to test myObj for checkProp. I
f the property is found, return that property's value.
If not, return "Not Found".
*/
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp) === true) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj("gift"));
console.log(checkObj("pet"));
console.log(checkObj("something else"));
console.log();


/*
Waypoint: Introducing JavaScript Object Notation JSON
Instructions: Add a new album to the myMusic JSON object.
Add artist and title strings, release_year number, and a formats array of strings.
*/
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1993,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
      "CD",
      "Cassette",
      "LP" ],
  }
];
console.log(myMusic);
console.log();


// Waypoint: Accessing nested objects in JSON.
// Nested JSON Object:
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
/*
Instructions: Access the myStorage JSON object to retrieve the contents of th glove box.
Only use object notation for properties witha space in their name.
*/
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
console.log();


// Waypoint: Accessing nested arrays in JSON
// How to access a nested array:
var ourPets = {
  "cats": [
    "Meowzer",
    "Fluffy",
    "Kit-Cat"
  ],
  "dogs": [
    "Spot",
    "Bowser",
    "Frankie"
  ]
};
console.log(ourPets.cats[1]);
console.log(ourPets.dogs[0]);
// Instructions: Retrieve the second tree from the variable myPlants using object dot and array bracket notation.
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);
console.log();
