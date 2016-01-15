// Write a program to get the count of each unique element of an array.

function countOfCars(original) {

  var compressed = [];
  // make a copy of the input array
  var copy = original.slice(0);

  // first loop goes over every element
  for (var i = 0; i < original.length; i++) {

    var myCount = 0;
    // loop over every element in the copy and see if it's the same
    for (var w = 0; w < copy.length; w++) {
      if (original[i] == copy[w]) {
        // increase amount of times duplicate is found
        myCount++;
        // sets item to undefined
        delete copy[w];
      }
    }

    if (myCount > 0) {
      var a = new Object();
      a.value = original[i];
      a.count = myCount;
      compressed.push(a);
    }
  }

  return compressed;
};

// It should go something like this:

var alltheCars = new Array("Audi", "Audi", "Jaguar", "Outback", "Outback", "Civic", "Civic", "Civic", "Audi");
var listtheCount = countOfCars(alltheCars);
console.log(listtheCount)

// As you are already using jQuery, you can use the grep function which is intended for searching an array:

// var result = $.grep(myArray, function(e){ return e.id == id; });