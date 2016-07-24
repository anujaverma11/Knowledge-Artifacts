// objects have already defined properties

// valueOf
// constructor
// toLocaleString
// toString
// isPrototypeOf
// propertyIsEnumerable
// hasOwnProperty

// all of the above properties belong to object prototypes
// A Prototype is like a blueprint object for the object we are trying to create.
// Passing down properties is called inheritence.


String.prototype.countAll = function(letter){
  var letterCount = 0;
  for(var i=0; i<=this.length; i++){
    if(this.charAt(i).toUpperCase() == letter.toUpperCase() ){
      letterCount++;
    }
  }
  return letterCount;
};



// Creating objects using object.create()

