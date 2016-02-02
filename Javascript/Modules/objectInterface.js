/*
Yet another approach is to create modules using a self-contained object interface, like so:
*/
var myGradesCalculate = (function () {

    // Keep this variable private inside this closure scope
    var myGrades = [93, 95, 88, 0, 55, 91];

    // Expose these functions via an interface while hiding the
    // implementation of the module within the function() block

    return {
        average: function() {
            var total = myGrades.reduce(function(accumulator, item) {
                return accumulator + item;
            }, 0);

            return 'Your average grade is ' + total / myGrades.length + '.';
        },

        failing: function() {
            var failingGrades = myGrades.filter(function(item) {
                return item < 70;
            });

            return 'You failed ' + failingGrades.length + ' times.';
        }
    }
})();
console.log(myGradesCalculate.failing());
console.log(myGradesCalculate.average());

/*
This approach lets us decide what variables/methods we want to keep private (e.g. myGrades)
and what variables/methods we want to expose by putting them in the return statement.
*/
