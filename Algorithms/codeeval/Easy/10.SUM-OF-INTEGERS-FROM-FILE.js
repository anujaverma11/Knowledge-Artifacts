// Print out the sum of integers read from a file.

// INPUT SAMPLE:

// The first argument to the program will be a path to a filename containing a positive integer, one per line. E.g.

// 5
// 12
// OUTPUT SAMPLE:

// Print out the sum of all the integers read from the file. E.g.

// 17

var fs  = require("fs");
var sum = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {

        sum += Number(line)
    }
    process.stdout.write(sum + ' ');
});
