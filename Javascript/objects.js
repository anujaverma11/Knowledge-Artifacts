// creating an object

var booksArray =["Great Expectations","The remains of the day","Peter Pan"];
var myBox = {
          height: 6,
          weight: 8,
          length: 10,
          volume: 480,
          material: "cardboard",
          contents: booksArray };

// myBox.width; will print 8 as a result
// myBox.width = 12; will change the width to 12.

myBox.contents.push("On the Road") // will add a new book to the booksArray
myBox.destination1 = "Orlando";
myBox.destination2 = "Miami";
myBox["no. of stops"] = 2; // will add a property to the existing error.


//Loop and print the results saved as object properties

for(var i=0;i < myBox["no. of stops"]; i++){
  console.log(myBox.["destination" + i]);
}


delete myBox.contents; //will delete the contents property.

// Adding each book as its own object and adding them to the Box object.

function addBook(box, name, writer){
  box["no. of Books"]++;
  box[book + box["no. of Books"]] = {title: name, author: writer};
}

addBook(myBox, "Great Expectations", "Charles Dickens");
addBook(myBox, "The remains of the day", "Kazuo Ishiguro");
addBook(myBox, "Peter Pan", "J.M. Barrie");
addBook(myBox, "On the Road", "Jack Kerouac");

console.log(myBox.book1.title);


// adding a new nested object into an object
// Properties can also be function
// An objects finction properties are referred to as its methods.
var aquarium = {
  Nemo: {type: "fish", species: "clownfish", length: 3.7}

  addCritter: function(name, type, species, length){
    this[name] = {type: type, species: species, length: length};
  }

}


//calling the above function

aquarium.addCritter("Bubbles", "fish","yellow tang", 5.6);


// creating function


// addCritter as an outside function

function addCritter(container, name, type, species, length){
  container[name] = {type: type, species: species, length: length};
  }

// Looping thru each property of an object
// Enumeration with the For-in loop
// For-in loop allows us to access each of theenumerable propertyin turn.
// The key represents every single property that is present inside the object
// The in keyword looks "in" the object to its right and finds each enumerable property in turn.
// aquarium is our object

for(key in aquarium){
  console.log(key);
}

aquarium.countFish = function(){
  var numFish = 0;
  for(key in this){
    if(this[key].type == 'fish'){
      numFish++;
    }
  }
  return numFish;
}
