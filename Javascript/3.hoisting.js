// How Javascript Loads -

//  - First, memory is set aside for all necessary variables and declarded functions.
//  - and then the executable code is hoisted.

//  - Function Expression are never hoisted. They are treated as assignment. Example below:

 function getMysteryNumber(){
  var chooseMystery =  function(){
    return 12;
  }

  return chooseMystery();

  var chooseMystery =  function(){
    return 7;
  }
}

getMysteryNumber();


// For the above code
// line 8 will be hoisted
// JS will create space for line 9 variable
// JS will overide memory for line 9 variable with line 15 variable.
// then executable code will hoist i.e. "return chooseMystery();" - which will execute line 9 - 11
// And thus it will return 12
// and as a result 15 - 17 will be never read
