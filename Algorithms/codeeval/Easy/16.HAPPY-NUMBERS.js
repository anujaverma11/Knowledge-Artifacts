// A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.

// INPUT SAMPLE:

// The first argument is the pathname to a file which contains test data, one test case per line. Each line contains a positive integer. E.g.

// 1
// 7
// 22
// OUTPUT SAMPLE:

// If the number is a happy number, print out 1. If not, print out 0. E.g

// 1
// 1
// 0
// For the curious, here's why 7 is a happy number: 7->49->97->130->10->1. Here's why 22 is NOT a happy number: 22->8->64->52->29->85->89->145->42->20->4->16->37->58->89 ...

// Starting with positive number
// replace the number by the sum of its digits

var happyNumbers = function(number, counter){
    var sum = 0;
    if (counter>=15) {
        return 0;
    }
    else if(number==1)
        {
            return 1;
        }
    else
        {   number = number.toString();
            number = number.split("");
            for(i=0;i<number.length;i++)
                {   sqNumber = Math.pow(Number(number[i]),2);
                    // console.log(sqNumber);
                    sum = sum+sqNumber}


        }
        //console.log(counter++)
        return happyNumbers(sum.toString(), counter) ;
};

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        happyNumbers(line, counter = 0);
    }
});


============================================================================

var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if ('' === line) {
        return;
    }

    var steps = [];

    while (1 < line && -1 === steps.indexOf(line)) {
        steps.push(line);

        digits = '' + line;
        line = 0;

        for (var i in digits) {
            line += Math.pow(digits[i], 2);
        }
    }

    console.log((1 == line) ? 1 : 0);
});

