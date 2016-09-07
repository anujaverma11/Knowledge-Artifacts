// The Fibonacci series is defined as: F(0) = 0; F(1) = 1; F(n) = F(n–1) + F(n–2) when n>1. Given an integer n≥0, print out the F(n).

// INPUT SAMPLE:

// The first argument will be a path to a filename containing integer numbers, one per line. E.g.

// 5
// 12
// OUTPUT SAMPLE:

// Print to stdout, the fibonacci number, F(n). E.g.

// 5
// 144

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      var number1 = 1;
      var number2 = 1;
      var fibonacci_number = 0;
      if (line==='0')
        {
          process.stdout.write('0'+'\n');
        }
      else if (line==='1')
        {
          process.stdout.write('1'+'\n');
        }
      else if (line==='2')
        {
          process.stdout.write('1'+'\n');
        }
      else if (line>=1) {
        for(index=3;index<=line ;index++)
          {
            fibonacci_number=number1+number2;
            number1=number2;
            number2=fibonacci_number;
          }
        process.stdout.write(fibonacci_number+'\n');
      }
    }
});

