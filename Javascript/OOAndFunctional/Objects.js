//Here is a sample Object
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};
console.log("A car has: ", car);
//Now Let's make a similar Object called motorBike
//Give it two wheels, one engine and one seat
var motorBike = {
  // Only change code below this line.
  "wheels":2,
  "engines":1,
  "seats":1
  // Only change code above this line.
};
(function() {return JSON.stringify(motorBike);})();
console.log("A motorbike has: ", motorBike);


//Constructor functions
// Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers.
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};
var myCar = new Car();
console.log(myCar);
// Only change code below this line.
var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 1;
};
var myMotorBike = new MotorBike();
console.log(myMotorBike);
// Only change code above this line.
(function() {return JSON.stringify(myMotorBike);})();


// Private properties and methods
//Let's create an object with a two functions. One attached as a property and one not.
var Car = function() {
  this.gear = 1;
  function addStyle(styleMe){
    return 'The Current Gear Is: ' + styleMe;
  }
  this.getGear = function() {
    return addStyle(this.gear);
  };
};
var Bike = function() {
  // Only change code below this line.
  speed = 100;  // private
  function addUnit(value) {
    return "Top speed is: " + value + "KM/H";
  }
  this.getSpeed = function () {  // public
    return addUnit(speed);
  };
};
// Only change code above this line.
var myCar = new Car();
console.log(myCar.getGear());
var myBike = new Bike();
console.log(myBike.getSpeed());
// console.log(myBike.addUnit()); --> TypeError: undefined is not a function
// console.log(myBike.speed); --> undefined
if(myBike.hasOwnProperty('getSpeed')){(function() {return JSON.stringify(myBike.getSpeed());})();};


// Make Instances of Objects with a Constructor Function
var Car = function() {
   this.wheels = 4;
};
// Only change code below this line.
var myCar = new Car();
//Add the property "engines" to myCar, and make it a number.
myCar.engines = 1;
console.log(myCar.engines);
console.log("MyCar has ", myCar);
console.log("MyCar has " + myCar.wheels + " wheels and " + myCar.engines + " engine(s)");
// Only change code above this line.
(function() {return JSON.stringify(myCar);})();
