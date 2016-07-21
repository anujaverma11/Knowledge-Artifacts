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




