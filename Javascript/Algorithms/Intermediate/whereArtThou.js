/*
Make a function that looks through an array of objects (first argument) and returns an array
of all objects that have have matching property and value pairs (second argument).
Each property and value pair of the source object must be present in the object
from the collection if it is to be included in the returned array.
Say What?
Example:
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]
*/
function where(collection, source) {
  var arr = [];
  // What's in a name?
  return arr;
}

console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// [{ first: "Tybalt", last: "Capulet" }]
console.log(where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));
// [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
console.log(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
// [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
console.log(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));
// [{ "a": 1, "b": 2, "c": 2 }]
