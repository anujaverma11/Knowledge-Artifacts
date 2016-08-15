Printing all JS

var obj =
    {
        a: 1,
        b: 2,
        c: 4,
        d: 3
    };

var max = 0;
for (var prop in obj) {
    console.log(prop) //will print only keys
    console.log(obj[prop]); //will print only values
    if (obj[prop]>max)

        {

            max = obj[prop];
        }


}



console.log(max); // Will print the maximum value of an object.