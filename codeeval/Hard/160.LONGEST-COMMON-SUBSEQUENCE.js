/*CHALLENGE DESCRIPTION:

You are given two sequences. Write a program to determine the longest common subsequence between the two strings (each string can have a maximum length of 50 characters). NOTE: This subsequence need not be contiguous. The input file may contain empty lines, these need to be ignored.

INPUT SAMPLE:

The first argument will be a path to a filename that contains two strings per line, semicolon delimited. You can assume that there is only one unique subsequence per test case. E.g.

XMJYAUZ;MZJAWXU
OUTPUT SAMPLE:

The longest common subsequence. Ensure that there are no trailing empty spaces on each line you print. E.g.

MJAU*/

line = "XMJYAUZ;MZJAWXU";
line=line.split(";");
var s = line[0];
var t = line[1];
var commonChars = {};
for (i = 0; i < s.length; i++)
{
     var ch = s.charAt(i);
    if (t.indexOf(ch) != -1)
    {
        commonChars[ch] =  t.indexOf(ch);
    }
}

var lastValue = commonChars[(Object.keys(commonChars)[0])]
var result =(Object.keys(commonChars)[0]);
console.log(result);
for(var key in commonChars) {


    var currentValue = commonChars[key];
    console.log("key "+ key + " lastValue "+ lastValue + " currentValue "+ currentValue);

    if (currentValue<lastValue && currentValue==lastValue)
        result=""

console.log(result);
}