/*You will be given a hexadecimal (base 16) number. Convert it into decimal (base 10).

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains a hex number. You may assume that the hex number does not have the leading 'Ox'. Also all alpha characters (a through f) in the input will be in lowercase. E.g.

9f
11
OUTPUT SAMPLE:

Print out the equivalent decimal number. E.g.

159
17
*/

/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(parseInt(line,16));
    }
});