// This code is excerpted from a post titled "JavaScript Modules: A Beginner's Guide" by Preethi Kasireddy
// https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.s6n14s6mp
/*
The module pattern is used to mimic the concept of classes.
There are several ways to accomplish the module pattern.
In this first example, I'll use an anonymous closure.
*/

(function () {
  // We keep these variables private inside this closure scope

  var myGrades = [93, 95, 88, 0, 55, 91];

  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);

      return 'Your average grade is ' + total / myGrades.length + '.';
  }

  var failing = function(){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});

    return 'You failed ' + failingGrades.length + ' times.';
  }

  console.log(average());
  console.log(failing());

}());

/*
With this construct, our anonymous function has its own evaluation environment or "closure",
and then we immediately evaluate it.
This lets us hide variables from the parent (global) namespace.
*/
