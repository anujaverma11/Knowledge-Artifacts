/*STRING SEARCHING
CHALLENGE DESCRIPTION:

You are given two strings. Determine if the second string is a substring of the first (Do NOT use any substr type library function). The second string may contain an asterisk(*) which should be treated as a regular expression i.e. matches zero or more characters. The asterisk can be escaped by a \ char in which case it should be interpreted as a regular '*' character. To summarize: the strings can contain alphabets, numbers, * and \ characters.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. The input file contains two comma delimited strings per line. E.g.

Hello,ell
This is good, is
CodeEval,C*Eval
Old,Young
OUTPUT SAMPLE:

If the second string is indeed a substring of the first, print out a 'true'(lowercase), else print out a 'false'(lowercase), one per line. E.g.

true
true
true
false*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !=="") {
      line = line.split(",");
      string1 = line[0];
      string2 = line[1];
      console.log(line)
    if(string2.indexOf("*")>=0)
      {
        string2=string2.split("*");
        var firstMatch=string2[0];
        var SecondMatch=string2[1];

        var startMatchFrom = string1.indexOf(firstMatch[0]);
        var noOfCompares = startMatchFrom+(firstMatch.length);
        var result1 = string1.substring(startMatchFrom, noOfCompares);


        startMatchFrom = string1.indexOf(SecondMatch[0]);
        noOfCompares = startMatchFrom+(SecondMatch.length);
        var result2 = string1.substring(startMatchFrom, noOfCompares);
      }
    else
      {
        startMatchFrom = string1.indexOf(string2[0]);
        noOfCompares = startMatchFrom+(string2.length);
        var result = string1.substring(startMatchFrom, noOfCompares);
      }

    if(result1===firstMatch && result2===SecondMatch)
      {
          console.log(true);
      }
    else if(result===string2)
      {
          console.log(true);
      }
    else
      {
          console.log(false);
      }
    }
});