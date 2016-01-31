/*
You can use local variables inside this function without accidentally overwriting existing
global variables, yet still access the global variables, like so:
*/
var global = 'Hello, I am a global variable :)';

(function () {
    // We keep these variables private inside this closure scope

    var myGrades = [93, 95, 88, 0, 55, 91];

    var average = function() {
        var total = myGrades.reduce(function(accumulator, item) {
            return accumulator + item}, 0);

        return 'Your average grade is ' + total / myGrades.length + '.';
    }

    var failing = function() {
        var failingGrades = myGrades.filter(function(item) {
            return item < 70;});

        return 'You failed ' + failingGrades.length + ' times.';
    }
    console.log(average());
    console.log(failing());
    console.log(global);
}());

/*
Note that the parentheses around the anonymous function are required, because statements that begin with
the keyword function are always considered to be function declarations (and you can't have unnamed function
declarations in JavaScript). Consequently, the surrounding parentheses create a function expression instead.
*/
// https://stackoverflow.com/questions/1634268/explain-javascripts-encapsulated-anonymous-function-syntax
// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
