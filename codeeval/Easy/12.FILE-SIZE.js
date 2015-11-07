
// Print the size of a file in bytes.

// INPUT:

// The first argument to your program has the path to the file you need to check the size of.

// OUTPUT SAMPLE:

// Print the size of the file in bytes. E.g.

// 55

var fs = require("fs");
var stats = fs.statSync(process.argv[2])
var fileSizeInBytes = stats["size"]
console.log(fileSizeInBytes)


// process.argv[2]
// It starts with 2 because the code will be run with

// node myprogram.js firstarg secondarg
// So

// process.argv[0] == "node"

// process.argv[1] == "myprogram.js"

// process.argv[2] == "firstarg"