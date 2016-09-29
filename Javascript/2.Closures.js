// Closures are taking variables from outer scope and bind them in Inner functions or local scope of other functions.
// Returning a function from a function, complete with variables from an external scope, is called a closure.
// A Closure wraps up an entire environment, binding necessary variable from other scope.

function testClosure(){
  var x = 4;

  function closeX(){
    return x;
  }

  return closeX;
}

var checkLocalX = testClosure(); // will return the function closeX and assign it to checkLocalX

checkLocalX(); // will print 4
// Even though testClosure has finished operating, its local variable is now bound with checkLocalX, because it is bound as a closure inside closeX.


function buildCloveTicketMaker(transport){
  return function(name){
    console.log("Here is your transportation ticket via the "+ transport + ".\n" + "Welcome to the Cold Closures Cove, " + name + "!");
  }
}

var getSubmarineTicket = buildCloveTicketMaker("Submarine");
getSubmarineTicket("Anuja");

// Will Print the following
// Here is your transportation ticket via the Submarine.
// Welcome to the Cold Closures Cove, Anuja!
// => undefined

// #################### Modifying Bound Values #########################


function buildCloveTicketMaker(transport){
  var passengerNumber = 0;
  return function(name){
    passengerNumber++;
    console.log("Here is your transportation ticket via the "+ transport + ".\n" + "Welcome to the Cold Closures Cove, " + name + "!" + "You are passenger #" + passengerNumber + ".");
  }
}

var getSubmarineTicket = buildCloveTicketMaker("Submarine");
getSubmarineTicket("Anuja");

// #################### Common Mistakes #########################

function assignTorpedo (name, passengerArray){
  var torpedoAssignment;
  for(var i=0; i<passengerArray.length;i++){
    if(passengerArray[i] == name){
      torpedoAssignment = function(){
        console.log("Ahoy," +  name + "!\n" +
                    "Man your post at Torpedo #" + (i+1) +"!");
      };
    }
  }
  return torpedoAssignment;
}

var subPassenger = ["luke", "Leia", "Han","Chewie","Yoda","R2-D2","Boba"]
var giveAssignment = assignTorpedo("Chewie",subPassenger);

// Correct way

function assignTorpedo (name, passengerArray){

  for(var i=0; i<passengerArray.length;i++){
    if(passengerArray[i] == name){
      return function(){
        console.log("Ahoy," +  name + "!\n" +
                    "Man your post at Torpedo #" + (i+1) +"!");

      };
    }
  }

}

var subPassenger = ["luke", "Leia", "Han","Chewie","Yoda","R2-D2","Boba"]
var giveAssignment = assignTorpedo("Chewie",subPassenger);

giveAssignment();


// Another Correct Way

function assignTorpedo (passengerArray){
  return function(name){
    for(var i=0; i<passengerArray.length;i++){
    if(passengerArray[i] == name){
        console.log("Ahoy," +  name + "!\n" +
                    "Man your post at Torpedo #" + (i+1) +"!");

    }
  }
  };
  }

var subPassenger = ["luke", "Leia", "Han","Chewie","Yoda","R2-D2","Boba"]
var giveAssignment = assignTorpedo(subPassenger);

giveAssignment("Chewie");