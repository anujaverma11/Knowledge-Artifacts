/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        number = parseInt(line);
        line = line.split('');
        var armstrong = 0;
        for(i=0;i<line.length;i++)
            {
                armstrong += Math.pow(line[i], line.length);
            }

        if (armstrong==number)
            {
                console.log("True");
            }
        else
            {
                console.log("False");
            }


        }
});