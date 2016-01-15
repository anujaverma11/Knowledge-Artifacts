/*CHALLENGE DESCRIPTION:

You are given a prefix expression. Write a program which evaluates it.

INPUT SAMPLE:

Your program should accept a file as its first argument. The file contains one prefix expression per line.

For example:

* + 2 3 4
Your program should read this file and insert it into any data structure you like. Traverse this data structure and evaluate the prefix expression. Each token is delimited by a whitespace. You may assume that sum ‘+’, multiplication ‘*’ and division ‘/’ are the only valid operators appearing in the test data.

OUTPUT SAMPLE:

Print to stdout the output of the prefix expression, one per line.

For example:

20
CONSTRAINTS:

The evaluation result will always be an integer ≥ 0.
The number of the test cases is ≤ 40.*/

/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    line = line.split(" ");
    for(var i=line.length-1;i>=0;i--)
      {foundOperation = false;
        if(line[i]=="+")
          { foundOperation = true;
            res = parseInt(line[i+1]) + parseInt(line[i+2]);
            }
        if(line[i]=="*")
          { foundOperation = true;
            res = parseInt(line[i+1]) * parseInt(line[i+2]);
          }
        if(line[i]=="/")
          { foundOperation = true;
            res = parseInt(line[i+1]) * parseInt(line[i+2]);
          }
        if(foundOperation===true)
          { line[i] = res; 1
            i++;
            for(j=i;j<line.length-2;j++)
              {
                line[j] = line[j+2];
              }
              line.pop();
              line.pop();
              i=line.length-1;
          }
        }
      console.log(line[0]);
    }
});

