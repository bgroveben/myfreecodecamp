/*
This is vary similar to the above approach, except that it ensures all methods and variables are kept private
until explicitly exposed.
*/
var myGradesCalculate = (function () {

    // Keep this variable private inside this closure scope
    var myGrades = [93, 95, 88, 0, 55, 91];

    var average = function () {
        var total = myGrades.reduce(function(accumulator, item) {
            return accumulator + item;
        }, 0);

        return 'Your average grade is ' + total / myGrades.length + '.';
    };

    var failing = function() {
        var failingGrades = myGrades.filter(function(item) {
            return item < 70;
        });

        return 'You failed ' + failingGrades.length + ' times.';
    };

    // Explicitly reveal public pointers to the private functions that we want to reveal publicly

    return {
        average: average,
        failing: failing
    }
})();
console.log(myGradesCalculate.failing());
console.log(myGradesCalculate.average());
