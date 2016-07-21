// #########################################################################################
// Function expression is building function at Load time rather than at program Load. Function expressions are declared like shown below:

var diff = function(a, b){
  return a*a - b*b;
};

// it always ends with a semi-colon.
// No need for naming the function and it is called Anonymous function.
// to call this function, simply use:

diff(5, 2);

// #########################################################################################
// A variable that holds a function can be passed into another function.
// Function expression give us the ability to determine which functionality we want to use.

var greeting;

if(newCustomer) {
  greeting = function(){
    alert("Hello!!");
  };
} else {
  greeting = function(){
    alert("Welcome back");
  };
}


closeTerminal(greeting);

function closeTerminal(message){
  message();
}

// #########################################################################################
// A function expression can be pass them without variables:

var numbers = [12,2,5,6,7,2,13]

var results =  numbers.map(function(arrayCell){ return arrayCell * 2; } );

// #########################################################################################
// Returning functions from functions and their immediate invocation

var parkRides [["ride1", 40]["ride2", 55]["ride3", 20]["ride4", 90]]
var fastPassQueue = ["ride3","ride2","ride1","ride2"]
var wantsRide = "ride3";


// assigning the returning of function to a variable and the calling function assigned to that variable.
var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
ticket();

// Immediate invocation of a function.
buildTicket(parkRides, fastPassQueue, wantsRide)();


function buildTicket(allRides, passRides, pick){
  if (passRides == pick){
    var pass=passRides.shift();
    return function(){alert("Quick")};
  } else {
    if(allRides[0][0]==pick){
      return function(){alert(ride)};
    }
  }
}
